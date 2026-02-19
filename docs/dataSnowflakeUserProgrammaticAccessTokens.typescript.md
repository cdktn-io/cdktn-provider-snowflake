# `dataSnowflakeUserProgrammaticAccessTokens` Submodule <a name="`dataSnowflakeUserProgrammaticAccessTokens` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokens" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/user_programmatic_access_tokens snowflake_user_programmatic_access_tokens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

new dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens(scope: Construct, id: string, config: DataSnowflakeUserProgrammaticAccessTokensConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig">DataSnowflakeUserProgrammaticAccessTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig">DataSnowflakeUserProgrammaticAccessTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeUserProgrammaticAccessTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeUserProgrammaticAccessTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/user_programmatic_access_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeUserProgrammaticAccessTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens">userProgrammaticAccessTokens</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput">forUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser">forUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `userProgrammaticAccessTokens`<sup>Required</sup> <a name="userProgrammaticAccessTokens" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens"></a>

```typescript
public readonly userProgrammaticAccessTokens: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a>

---

##### `forUserInput`<sup>Optional</sup> <a name="forUserInput" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput"></a>

```typescript
public readonly forUserInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `forUser`<sup>Required</sup> <a name="forUser" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser"></a>

```typescript
public readonly forUser: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeUserProgrammaticAccessTokensConfig <a name="DataSnowflakeUserProgrammaticAccessTokensConfig" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

const dataSnowflakeUserProgrammaticAccessTokensConfig: dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser">forUser</a></code> | <code>string</code> | Returns programmatic access tokens for the specified user. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `forUser`<sup>Required</sup> <a name="forUser" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser"></a>

```typescript
public readonly forUser: string;
```

- *Type:* string

Returns programmatic access tokens for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/user_programmatic_access_tokens#for_user DataSnowflakeUserProgrammaticAccessTokens#for_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

const dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens: dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens = { ... }
```


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

const dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput: dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

new dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get"></a>

```typescript
public get(index: number): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

new dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a>

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

new dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeUserProgrammaticAccessTokens } from '@cdktn/provider-snowflake'

new dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">minsToBypassNetworkPolicyRequirement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction">roleRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo">rotatedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `minsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="minsToBypassNetworkPolicyRequirement" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```typescript
public readonly minsToBypassNetworkPolicyRequirement: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleRestriction`<sup>Required</sup> <a name="roleRestriction" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction"></a>

```typescript
public readonly roleRestriction: string;
```

- *Type:* string

---

##### `rotatedTo`<sup>Required</sup> <a name="rotatedTo" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo"></a>

```typescript
public readonly rotatedTo: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a>

---



