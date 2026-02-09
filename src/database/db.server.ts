import { createClient, type Client } from '@libsql/client';
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '$env/static/private';

let client: Client | null = null;

export function db(): Client {
    if (!client) {
        client = createClient({
            url: TURSO_DATABASE_URL!,
            authToken: TURSO_AUTH_TOKEN!,
        });
    }
    return client;
}

export async function initTable(){
    await db().execute(`CREATE TABLE IF NOT EXISTS counter_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    counter INTEGER NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);
    await db().execute(`INSERT OR IGNORE INTO counter_table (id, counter, last_updated) VALUES (1, 0, CURRENT_TIMESTAMP)`);

}

export async function getCurrentCounter(){
    const result = await db().execute(`SELECT counter FROM counter_table WHERE id = 1`);
    const counterValue = result.rows[0][0] as number;
    return counterValue;
}

export async function incrementCounter(){
    await db().execute(`UPDATE counter_table SET counter = counter + 1, last_updated = CURRENT_TIMESTAMP WHERE id = 1`);
}