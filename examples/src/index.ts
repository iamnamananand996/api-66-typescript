import { Guest6dd35d51ee9eApiClient } from 'guest-6dd35d51ee9e';

(async () => {
  const client = new Guest6dd35d51ee9eApiClient({});
  await client.pets.listPets({
    limit: 20,
  });
})();
