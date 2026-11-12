# `dataSnowflakePostgresMirrors` Submodule <a name="`dataSnowflakePostgresMirrors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePostgresMirrors <a name="DataSnowflakePostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors(scope: Construct, id: string, config?: DataSnowflakePostgresMirrorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance">resetPostgresInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPostgresInstance` <a name="resetPostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance"></a>

```typescript
public resetPostgresInstance(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakePostgresMirrors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakePostgresMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors">postgresMirrors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput">postgresInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `postgresMirrors`<sup>Required</sup> <a name="postgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors"></a>

```typescript
public readonly postgresMirrors: DataSnowflakePostgresMirrorsPostgresMirrorsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `postgresInstanceInput`<sup>Optional</sup> <a name="postgresInstanceInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput"></a>

```typescript
public readonly postgresInstanceInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePostgresMirrorsConfig <a name="DataSnowflakePostgresMirrorsConfig" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

const dataSnowflakePostgresMirrorsConfig: dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresInstance`<sup>Optional</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

### DataSnowflakePostgresMirrorsPostgresMirrors <a name="DataSnowflakePostgresMirrorsPostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

const dataSnowflakePostgresMirrorsPostgresMirrors: dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors = { ... }
```


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

const dataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput: dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput = { ... }
```


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

const dataSnowflakePostgresMirrorsPostgresMirrorsShowOutput: dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes">applyLagBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations">applyLagOperations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds">applyLagSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName">catalogIntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly">feedOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn">lastAppliedCommitLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime">lastAppliedCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId">lastOperationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas">postgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus">postgresStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables">postgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations">recentQueryDurations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType">targetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyLagBytes`<sup>Required</sup> <a name="applyLagBytes" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes"></a>

```typescript
public readonly applyLagBytes: number;
```

- *Type:* number

---

##### `applyLagOperations`<sup>Required</sup> <a name="applyLagOperations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations"></a>

```typescript
public readonly applyLagOperations: number;
```

- *Type:* number

---

##### `applyLagSeconds`<sup>Required</sup> <a name="applyLagSeconds" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds"></a>

```typescript
public readonly applyLagSeconds: number;
```

- *Type:* number

---

##### `catalogIntegrationName`<sup>Required</sup> <a name="catalogIntegrationName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```typescript
public readonly catalogIntegrationName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `feedOnly`<sup>Required</sup> <a name="feedOnly" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly"></a>

```typescript
public readonly feedOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastAppliedCommitLsn`<sup>Required</sup> <a name="lastAppliedCommitLsn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```typescript
public readonly lastAppliedCommitLsn: string;
```

- *Type:* string

---

##### `lastAppliedCommitTime`<sup>Required</sup> <a name="lastAppliedCommitTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```typescript
public readonly lastAppliedCommitTime: string;
```

- *Type:* string

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime"></a>

```typescript
public readonly lastApplyTime: string;
```

- *Type:* string

---

##### `lastOperationId`<sup>Required</sup> <a name="lastOperationId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId"></a>

```typescript
public readonly lastOperationId: number;
```

- *Type:* number

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime"></a>

```typescript
public readonly lastOperationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas"></a>

```typescript
public readonly postgresSchemas: string[];
```

- *Type:* string[]

---

##### `postgresStatus`<sup>Required</sup> <a name="postgresStatus" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus"></a>

```typescript
public readonly postgresStatus: string;
```

- *Type:* string

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables"></a>

```typescript
public readonly postgresTables: string[];
```

- *Type:* string[]

---

##### `recentQueryDurations`<sup>Required</sup> <a name="recentQueryDurations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations"></a>

```typescript
public readonly recentQueryDurations: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: string;
```

- *Type:* string

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType"></a>

```typescript
public readonly targetTableType: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get"></a>

```typescript
public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePostgresMirrorsPostgresMirrors;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePostgresMirrors } from '@cdktn/provider-snowflake'

new dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining">initialSnapshotTablesRemaining</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount">tableCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `initialSnapshotTablesRemaining`<sup>Required</sup> <a name="initialSnapshotTablesRemaining" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining"></a>

```typescript
public readonly initialSnapshotTablesRemaining: number;
```

- *Type:* number

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime"></a>

```typescript
public readonly lastApplyTime: string;
```

- *Type:* string

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime"></a>

```typescript
public readonly lastOperationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tableCount`<sup>Required</sup> <a name="tableCount" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount"></a>

```typescript
public readonly tableCount: number;
```

- *Type:* number

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a>

---



