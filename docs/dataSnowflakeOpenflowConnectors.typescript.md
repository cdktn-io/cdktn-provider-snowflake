# `dataSnowflakeOpenflowConnectors` Submodule <a name="`dataSnowflakeOpenflowConnectors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectors <a name="DataSnowflakeOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors(scope: Construct, id: string, config?: DataSnowflakeOpenflowConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn"></a>

```typescript
public putIn(value: DataSnowflakeOpenflowConnectorsIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeOpenflowConnectorsLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors">openflowConnectors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in"></a>

```typescript
public readonly in: DataSnowflakeOpenflowConnectorsInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowConnectorsLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a>

---

##### `openflowConnectors`<sup>Required</sup> <a name="openflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors"></a>

```typescript
public readonly openflowConnectors: DataSnowflakeOpenflowConnectorsOpenflowConnectorsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeOpenflowConnectorsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeOpenflowConnectorsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorsConfig <a name="DataSnowflakeOpenflowConnectorsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsConfig: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeOpenflowConnectorsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowConnectorsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

### DataSnowflakeOpenflowConnectorsIn <a name="DataSnowflakeOpenflowConnectorsIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsIn: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

### DataSnowflakeOpenflowConnectorsLimit <a name="DataSnowflakeOpenflowConnectorsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsLimit: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

### DataSnowflakeOpenflowConnectorsOpenflowConnectors <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsOpenflowConnectors: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors = { ... }
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput = { ... }
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput: dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorsInOutputReference <a name="DataSnowflakeOpenflowConnectorsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---


### DataSnowflakeOpenflowConnectorsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash">defaultVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias">lastVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash">lastVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri">lastVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName">lastVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri">lastVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition"></a>

```typescript
public readonly connectorDefinition: string;
```

- *Type:* string

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl"></a>

```typescript
public readonly connectorUrl: string;
```

- *Type:* string

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```typescript
public readonly defaultVersionAlias: string;
```

- *Type:* string

---

##### `defaultVersionGitCommitHash`<sup>Required</sup> <a name="defaultVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```typescript
public readonly defaultVersionGitCommitHash: string;
```

- *Type:* string

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```typescript
public readonly defaultVersionLocationUri: string;
```

- *Type:* string

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName"></a>

```typescript
public readonly defaultVersionName: string;
```

- *Type:* string

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```typescript
public readonly defaultVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastVersionAlias`<sup>Required</sup> <a name="lastVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias"></a>

```typescript
public readonly lastVersionAlias: string;
```

- *Type:* string

---

##### `lastVersionGitCommitHash`<sup>Required</sup> <a name="lastVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```typescript
public readonly lastVersionGitCommitHash: string;
```

- *Type:* string

---

##### `lastVersionLocationUri`<sup>Required</sup> <a name="lastVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```typescript
public readonly lastVersionLocationUri: string;
```

- *Type:* string

---

##### `lastVersionName`<sup>Required</sup> <a name="lastVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName"></a>

```typescript
public readonly lastVersionName: string;
```

- *Type:* string

---

##### `lastVersionSourceLocationUri`<sup>Required</sup> <a name="lastVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```typescript
public readonly lastVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```typescript
public readonly liveVersionLocationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorsOpenflowConnectors;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectors } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition"></a>

```typescript
public readonly connectorDefinition: string;
```

- *Type:* string

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl"></a>

```typescript
public readonly connectorUrl: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias"></a>

```typescript
public readonly defaultVersionAlias: string;
```

- *Type:* string

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```typescript
public readonly defaultVersionLocationUri: string;
```

- *Type:* string

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName"></a>

```typescript
public readonly defaultVersionName: string;
```

- *Type:* string

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```typescript
public readonly defaultVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri"></a>

```typescript
public readonly liveVersionLocationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a>

---



