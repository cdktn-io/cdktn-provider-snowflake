# `dataSnowflakeStorageIntegrations` Submodule <a name="`dataSnowflakeStorageIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStorageIntegrations <a name="DataSnowflakeStorageIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations snowflake_storage_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations(scope: Construct, id: string, config?: DataSnowflakeStorageIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig">DataSnowflakeStorageIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig">DataSnowflakeStorageIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeStorageIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isConstruct"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformElement"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeStorageIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeStorageIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeStorageIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStorageIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.storageIntegrations">storageIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList">DataSnowflakeStorageIntegrationsStorageIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `storageIntegrations`<sup>Required</sup> <a name="storageIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.storageIntegrations"></a>

```typescript
public readonly storageIntegrations: DataSnowflakeStorageIntegrationsStorageIntegrationsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList">DataSnowflakeStorageIntegrationsStorageIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStorageIntegrationsConfig <a name="DataSnowflakeStorageIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageIntegrationsConfig: dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations#id DataSnowflakeStorageIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE INTEGRATION for each storage integration returned by SHOW STORAGE INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations#id DataSnowflakeStorageIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations#like DataSnowflakeStorageIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE INTEGRATION for each storage integration returned by SHOW STORAGE INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/storage_integrations#with_describe DataSnowflakeStorageIntegrations#with_describe}

---

### DataSnowflakeStorageIntegrationsStorageIntegrations <a name="DataSnowflakeStorageIntegrationsStorageIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageIntegrationsStorageIntegrations: dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrations = { ... }
```


### DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput: dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput = { ... }
```


### DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput: dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.allowedLocations">allowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.blockedLocations">blockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.consentUrl">consentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.iamUserArn">iamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.multiTenantAppName">multiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.objectAcl">objectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput">DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedLocations`<sup>Required</sup> <a name="allowedLocations" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.allowedLocations"></a>

```typescript
public readonly allowedLocations: string[];
```

- *Type:* string[]

---

##### `blockedLocations`<sup>Required</sup> <a name="blockedLocations" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.blockedLocations"></a>

```typescript
public readonly blockedLocations: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `consentUrl`<sup>Required</sup> <a name="consentUrl" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.consentUrl"></a>

```typescript
public readonly consentUrl: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamUserArn`<sup>Required</sup> <a name="iamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.iamUserArn"></a>

```typescript
public readonly iamUserArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiTenantAppName`<sup>Required</sup> <a name="multiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.multiTenantAppName"></a>

```typescript
public readonly multiTenantAppName: string;
```

- *Type:* string

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput">DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutput</a>

---


### DataSnowflakeStorageIntegrationsStorageIntegrationsList <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList">DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList">DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrations">DataSnowflakeStorageIntegrationsStorageIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList">DataSnowflakeStorageIntegrationsStorageIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList">DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageIntegrationsStorageIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrations">DataSnowflakeStorageIntegrationsStorageIntegrations</a>

---


### DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference <a name="DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput">DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageIntegrations.DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput">DataSnowflakeStorageIntegrationsStorageIntegrationsShowOutput</a>

---



