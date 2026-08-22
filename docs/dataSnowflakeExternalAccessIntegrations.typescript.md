# `dataSnowflakeExternalAccessIntegrations` Submodule <a name="`dataSnowflakeExternalAccessIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations snowflake_external_access_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations(scope: Construct, id: string, config?: DataSnowflakeExternalAccessIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeExternalAccessIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeExternalAccessIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalAccessIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalAccessIntegrationsConfig <a name="DataSnowflakeExternalAccessIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeExternalAccessIntegrationsConfig: dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations: dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations = { ... }
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput: dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput = { ... }
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput: dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```typescript
public readonly allowedApiAuthenticationIntegrations: string[];
```

- *Type:* string[]

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string[];
```

- *Type:* string[]

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```typescript
public readonly allowedNetworkRules: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get"></a>

```typescript
public get(index: number): DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeExternalAccessIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a>

---



