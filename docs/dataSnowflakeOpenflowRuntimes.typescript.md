# `dataSnowflakeOpenflowRuntimes` Submodule <a name="`dataSnowflakeOpenflowRuntimes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes snowflake_openflow_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes(scope: Construct, id: string, config?: DataSnowflakeOpenflowRuntimesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn"></a>

```typescript
public putIn(value: DataSnowflakeOpenflowRuntimesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeOpenflowRuntimesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes">openflowRuntimes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in"></a>

```typescript
public readonly in: DataSnowflakeOpenflowRuntimesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowRuntimesLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a>

---

##### `openflowRuntimes`<sup>Required</sup> <a name="openflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes"></a>

```typescript
public readonly openflowRuntimes: DataSnowflakeOpenflowRuntimesOpenflowRuntimesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeOpenflowRuntimesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeOpenflowRuntimesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowRuntimesConfig <a name="DataSnowflakeOpenflowRuntimesConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesConfig: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeOpenflowRuntimesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowRuntimesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

### DataSnowflakeOpenflowRuntimesIn <a name="DataSnowflakeOpenflowRuntimesIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesIn: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

### DataSnowflakeOpenflowRuntimesLimit <a name="DataSnowflakeOpenflowRuntimesLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesLimit: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

### DataSnowflakeOpenflowRuntimesOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesOpenflowRuntimes: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes = { ... }
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput = { ... }
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput: dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowRuntimesInOutputReference <a name="DataSnowflakeOpenflowRuntimesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowRuntimesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---


### DataSnowflakeOpenflowRuntimesLimitOutputReference <a name="DataSnowflakeOpenflowRuntimesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowRuntimesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier">nodeTypeTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl">serverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `nodeTypeTier`<sup>Required</sup> <a name="nodeTypeTier" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier"></a>

```typescript
public readonly nodeTypeTier: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowRuntimesOpenflowRuntimes;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowRuntimes } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a>

---



