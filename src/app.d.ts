// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
// import { SupabaseClient, Session } from '@supabase/supabase-js'
// import { Database } from './DatabaseDefinitions'

// declare namespace App {
// 	// interface Locals {}
// 	// interface PageData {}
// 	// interface Error {}
// 	interface Locals {
// 		supabase: SupabaseClient<Database>
// 		getSession(): Promise<Session | null>
// 	}
// 	interface PageData {
// 		session: Session | null
// 	}
// 	// interface Platform {}
// }
// src/app.d.ts

import { SupabaseClient, Session } from '@supabase/supabase-js'

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient
			getSession(): Promise<Session | null>
		}
		interface PageData {
			session: Session | null
		}
		// interface Error {}
		// interface Platform {}
	}
}