// This DB interface is not necessary as there is a 'native' access,
// but this is the method that makes the DB available during testing

import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)