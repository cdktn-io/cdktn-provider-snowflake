# `dataSnowflakeIcebergTables` Submodule <a name="`dataSnowflakeIcebergTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeIcebergTables <a name="DataSnowflakeIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables snowflake_iceberg_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTables(scope: Construct, id: string, config?: DataSnowflakeIcebergTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig">DataSnowflakeIcebergTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig">DataSnowflakeIcebergTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn"></a>

```typescript
public putIn(value: DataSnowflakeIcebergTablesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeIcebergTablesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters"></a>

```typescript
public resetWithParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeIcebergTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeIcebergTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeIcebergTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables">icebergTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput">withParametersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `icebergTables`<sup>Required</sup> <a name="icebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables"></a>

```typescript
public readonly icebergTables: DataSnowflakeIcebergTablesIcebergTablesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in"></a>

```typescript
public readonly in: DataSnowflakeIcebergTablesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeIcebergTablesLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeIcebergTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeIcebergTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput"></a>

```typescript
public readonly withParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeIcebergTablesConfig <a name="DataSnowflakeIcebergTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesConfig: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeIcebergTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeIcebergTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

### DataSnowflakeIcebergTablesIcebergTables <a name="DataSnowflakeIcebergTablesIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTables: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutput <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesDescribeOutput: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParameters <a name="DataSnowflakeIcebergTablesIcebergTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParameters: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalog <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersCatalog: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutput <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesShowOutput: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs = { ... }
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields = { ... }
```


### DataSnowflakeIcebergTablesIn <a name="DataSnowflakeIcebergTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesIn: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#account DataSnowflakeIcebergTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#database DataSnowflakeIcebergTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#schema DataSnowflakeIcebergTables#schema}

---

### DataSnowflakeIcebergTablesLimit <a name="DataSnowflakeIcebergTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

const dataSnowflakeIcebergTablesLimit: dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#rows DataSnowflakeIcebergTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#from DataSnowflakeIcebergTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable"></a>

```typescript
public readonly isNullable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```typescript
public readonly privacyDomain: string;
```

- *Type:* string

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```typescript
public readonly sourceIcebergType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault"></a>

```typescript
public readonly writeDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesList <a name="DataSnowflakeIcebergTablesIcebergTablesList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataSnowflakeIcebergTablesIcebergTablesParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeIcebergTablesIcebergTablesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTables;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersCatalog;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync">catalogSync</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction">enableDataCompaction</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize">targetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog"></a>

```typescript
public readonly catalog: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a>

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync"></a>

```typescript
public readonly catalogSync: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a>

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a>

---

##### `enableDataCompaction`<sup>Required</sup> <a name="enableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction"></a>

```typescript
public readonly enableDataCompaction: DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a>

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```typescript
public readonly enableIcebergMergeOnRead: DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume"></a>

```typescript
public readonly externalVolume: DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a>

---

##### `icebergMergeOnReadBehavior`<sup>Required</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```typescript
public readonly icebergMergeOnReadBehavior: DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a>

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a>

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a>

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize"></a>

```typescript
public readonly targetFileSize: DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```typescript
public readonly currentSnapshotId: number;
```

- *Type:* number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```typescript
public readonly executionState: string;
```

- *Type:* string

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```typescript
public readonly lastSnapshotTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```typescript
public readonly pendingSnapshotCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus"></a>

```typescript
public readonly autoRefreshStatus: DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata"></a>

```typescript
public readonly canWriteMetadata: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName"></a>

```typescript
public readonly catalogSyncName: string;
```

- *Type:* string

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName"></a>

```typescript
public readonly catalogTableName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```typescript
public readonly currentPartitionSpecId: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName"></a>

```typescript
public readonly externalVolumeName: string;
```

- *Type:* string

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```typescript
public readonly icebergTableFormatVersion: number;
```

- *Type:* number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType"></a>

```typescript
public readonly icebergTableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs"></a>

```typescript
public readonly partitionSpecs: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get"></a>

```typescript
public get(index: number): DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```typescript
public readonly fields: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a>

---


### DataSnowflakeIcebergTablesInOutputReference <a name="DataSnowflakeIcebergTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---


### DataSnowflakeIcebergTablesLimitOutputReference <a name="DataSnowflakeIcebergTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeIcebergTables } from '@cdktn/provider-snowflake'

new dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeIcebergTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---



