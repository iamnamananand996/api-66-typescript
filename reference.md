# Reference

## Pets

<details><summary><code>client.pets.<a href="/src/api/resources/pets/client/Client.ts">listPets</a>({ ...params }) -> Guest6dd35d51ee9eApi.Pet[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pets.listPets({
  limit: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Guest6dd35d51ee9eApi.ListPetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PetsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pets.<a href="/src/api/resources/pets/client/Client.ts">createPet</a>({ ...params }) -> Guest6dd35d51ee9eApi.Pet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pets.createPet({
  name: 'Whiskers',
  species: 'cat',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Guest6dd35d51ee9eApi.NewPet`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PetsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pets.<a href="/src/api/resources/pets/client/Client.ts">getPet</a>({ ...params }) -> Guest6dd35d51ee9eApi.Pet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pets.getPet({
  petId: 2,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Guest6dd35d51ee9eApi.GetPetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PetsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
