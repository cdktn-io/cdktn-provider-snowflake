# `dataSnowflakeOpenflowDeployments` Submodule <a name="`dataSnowflakeOpenflowDeployments` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowDeployments <a name="DataSnowflakeOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments snowflake_openflow_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments(scope: Construct, id: string, config?: DataSnowflakeOpenflowDeploymentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeOpenflowDeploymentsLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters"></a>

```typescript
public resetWithParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments">openflowDeployments</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput">withParametersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowDeploymentsLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a>

---

##### `openflowDeployments`<sup>Required</sup> <a name="openflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments"></a>

```typescript
public readonly openflowDeployments: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeOpenflowDeploymentsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput"></a>

```typescript
public readonly withParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowDeploymentsConfig <a name="DataSnowflakeOpenflowDeploymentsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsConfig: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters">withParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowDeploymentsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters"></a>

```typescript
public readonly withParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

### DataSnowflakeOpenflowDeploymentsLimit <a name="DataSnowflakeOpenflowDeploymentsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsLimit: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

### DataSnowflakeOpenflowDeploymentsOpenflowDeployments <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsOpenflowDeployments: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments = { ... }
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput = { ... }
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters = { ... }
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable = { ... }
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput: dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowDeploymentsLimitOutputReference <a name="DataSnowflakeOpenflowDeploymentsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsOpenflowDeployments;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable">eventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable"></a>

```typescript
public readonly eventTable: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowDeployments } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a>

---



