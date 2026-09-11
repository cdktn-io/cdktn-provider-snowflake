# `dataSnowflakeOpenflowConnectorDefinitions` Submodule <a name="`dataSnowflakeOpenflowConnectorDefinitions` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions snowflake_openflow_connector_definitions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions(scope: Construct, id: string, config?: DataSnowflakeOpenflowConnectorDefinitionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit">resetLimit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeOpenflowConnectorDefinitionsLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit"></a>

```typescript
public resetLimit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectorDefinitions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowConnectorDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectorDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions">openflowConnectorDefinitions</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like">like</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a>

---

##### `openflowConnectorDefinitions`<sup>Required</sup> <a name="openflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions"></a>

```typescript
public readonly openflowConnectorDefinitions: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeOpenflowConnectorDefinitionsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorDefinitionsConfig <a name="DataSnowflakeOpenflowConnectorDefinitionsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorDefinitionsConfig: dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | limit block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#like DataSnowflakeOpenflowConnectorDefinitions#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeOpenflowConnectorDefinitionsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#limit DataSnowflakeOpenflowConnectorDefinitions#limit}

---

### DataSnowflakeOpenflowConnectorDefinitionsLimit <a name="DataSnowflakeOpenflowConnectorDefinitionsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorDefinitionsLimit: dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#rows DataSnowflakeOpenflowConnectorDefinitions#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#from DataSnowflakeOpenflowConnectorDefinitions#from}

---

### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions: dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions = { ... }
```


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

const dataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput: dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorDefinitionsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeOpenflowConnectorDefinitions } from '@cdktn/provider-snowflake'

new dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType">minRuntimeNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minRuntimeNodeType`<sup>Required</sup> <a name="minRuntimeNodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType"></a>

```typescript
public readonly minRuntimeNodeType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a>

---



