# `dataSnowflakeHybridTables` Submodule <a name="`dataSnowflakeHybridTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeHybridTables <a name="DataSnowflakeHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables snowflake_hybrid_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTables(scope: Construct, id: string, config?: DataSnowflakeHybridTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes">resetWithIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys">resetWithKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn"></a>

```typescript
public putIn(value: DataSnowflakeHybridTablesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeHybridTablesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

##### `resetWithIndexes` <a name="resetWithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes"></a>

```typescript
public resetWithIndexes(): void
```

##### `resetWithKeys` <a name="resetWithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys"></a>

```typescript
public resetWithKeys(): void
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters"></a>

```typescript
public resetWithParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeHybridTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeHybridTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeHybridTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables">hybridTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput">withIndexesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput">withKeysInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput">withParametersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes">withIndexes</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys">withKeys</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `hybridTables`<sup>Required</sup> <a name="hybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables"></a>

```typescript
public readonly hybridTables: DataSnowflakeHybridTablesHybridTablesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in"></a>

```typescript
public readonly in: DataSnowflakeHybridTablesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeHybridTablesLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeHybridTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeHybridTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withIndexesInput`<sup>Optional</sup> <a name="withIndexesInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput"></a>

```typescript
public readonly withIndexesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withKeysInput`<sup>Optional</sup> <a name="withKeysInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput"></a>

```typescript
public readonly withKeysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput"></a>

```typescript
public readonly withParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withIndexes`<sup>Required</sup> <a name="withIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes"></a>

```typescript
public readonly withIndexes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withKeys`<sup>Required</sup> <a name="withKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys"></a>

```typescript
public readonly withKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeHybridTablesConfig <a name="DataSnowflakeHybridTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesConfig: dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes">withIndexes</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys">withKeys</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeHybridTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeHybridTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `withIndexes`<sup>Optional</sup> <a name="withIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes"></a>

```typescript
public readonly withIndexes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `withKeys`<sup>Optional</sup> <a name="withKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys"></a>

```typescript
public readonly withKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

### DataSnowflakeHybridTablesHybridTables <a name="DataSnowflakeHybridTablesHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTables: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables = { ... }
```


### DataSnowflakeHybridTablesHybridTablesDescribeOutput <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesDescribeOutput: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput = { ... }
```


### DataSnowflakeHybridTablesHybridTablesParameters <a name="DataSnowflakeHybridTablesHybridTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesParameters: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters = { ... }
```


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays = { ... }
```


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays = { ... }
```


### DataSnowflakeHybridTablesHybridTablesShowIndexes <a name="DataSnowflakeHybridTablesHybridTablesShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesShowIndexes: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes = { ... }
```


### DataSnowflakeHybridTablesHybridTablesShowKeysOutput <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesShowKeysOutput: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput = { ... }
```


### DataSnowflakeHybridTablesHybridTablesShowOutput <a name="DataSnowflakeHybridTablesHybridTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesHybridTablesShowOutput: dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput = { ... }
```


### DataSnowflakeHybridTablesIn <a name="DataSnowflakeHybridTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesIn: dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

### DataSnowflakeHybridTablesLimit <a name="DataSnowflakeHybridTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

const dataSnowflakeHybridTablesLimit: dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeHybridTablesHybridTablesDescribeOutputList <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord">schemaEvolutionRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable"></a>

```typescript
public readonly isNullable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```typescript
public readonly privacyDomain: string;
```

- *Type:* string

---

##### `schemaEvolutionRecord`<sup>Required</sup> <a name="schemaEvolutionRecord" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```typescript
public readonly schemaEvolutionRecord: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesList <a name="DataSnowflakeHybridTablesHybridTablesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes">showIndexes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput">showKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeHybridTablesHybridTablesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataSnowflakeHybridTablesHybridTablesParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a>

---

##### `showIndexes`<sup>Required</sup> <a name="showIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes"></a>

```typescript
public readonly showIndexes: DataSnowflakeHybridTablesHybridTablesShowIndexesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a>

---

##### `showKeysOutput`<sup>Required</sup> <a name="showKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput"></a>

```typescript
public readonly showKeysOutput: DataSnowflakeHybridTablesHybridTablesShowKeysOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeHybridTablesHybridTablesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTables;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersList <a name="DataSnowflakeHybridTablesHybridTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a>

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a>

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesList <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns">columns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns">includedColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique">isUnique</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns"></a>

```typescript
public readonly columns: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `includedColumns`<sup>Required</sup> <a name="includedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns"></a>

```typescript
public readonly includedColumns: string;
```

- *Type:* string

---

##### `isUnique`<sup>Required</sup> <a name="isUnique" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique"></a>

```typescript
public readonly isUnique: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesShowIndexes;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a>

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns">referencedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable">referencedTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule">updateRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedColumns`<sup>Required</sup> <a name="referencedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns"></a>

```typescript
public readonly referencedColumns: string[];
```

- *Type:* string[]

---

##### `referencedTable`<sup>Required</sup> <a name="referencedTable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable"></a>

```typescript
public readonly referencedTable: string;
```

- *Type:* string

---

##### `updateRule`<sup>Required</sup> <a name="updateRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule"></a>

```typescript
public readonly updateRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesShowKeysOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesShowOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes">bytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes"></a>

```typescript
public readonly bytes: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesHybridTablesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a>

---


### DataSnowflakeHybridTablesInOutputReference <a name="DataSnowflakeHybridTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---


### DataSnowflakeHybridTablesLimitOutputReference <a name="DataSnowflakeHybridTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeHybridTables } from '@cdktn/provider-snowflake'

new dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeHybridTablesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---



