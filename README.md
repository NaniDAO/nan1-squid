
Start the database container: 

```bash
docker compose up -d
```

Generate TypeORM classes based on the schema:

```bash
npx squid-typeorm-codegen
```

Compile the TypeORM classes:

```bash
npx tsc
```

Generate the migration file:

```bash
npx squid-typeorm-migration generate
```

Apply the migration with:

```bash
npx squid-typeorm-migration apply
```

Generate utility classes for decoding Accounts (Factory) contract data based on its ABI downloaded from Etherscan:

```bash
npx \
squid-evm-typegen \
src/abi \
0x000000000000dD366cc2E4432bB998e41DFD47C7#accounts
```

Generate utility classes for decoding Account contract data based on its ABI downloaded from Etherscan:

```bash
npx \
squid-evm-typegen \
src/abi \
0x0000000000001C05075915622130c16f6febC541#account
```

Compile the project and start the processor process: 

```bash
npx tsc
node -r dotenv/config lib/main.js
```

Configure the GraphQL port and start the GraphQL server:

```bash
npx squid-graphql-server
```