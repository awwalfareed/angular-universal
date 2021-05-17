import { UserEffects } from './user.effect';
import { NgoEffects } from './ngo.effect';

export const effects: any[] = [UserEffects, NgoEffects];

export * from './user.effect';
export * from './ngo.effect';