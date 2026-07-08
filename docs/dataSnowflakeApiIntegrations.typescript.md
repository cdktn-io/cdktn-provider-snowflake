# `dataSnowflakeApiIntegrations` Submodule <a name="`dataSnowflakeApiIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeApiIntegrations <a name="DataSnowflakeApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations snowflake_api_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations(scope: Construct, id: string, config?: DataSnowflakeApiIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeApiIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeApiIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeApiIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations">apiIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiIntegrations`<sup>Required</sup> <a name="apiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations"></a>

```typescript
public readonly apiIntegrations: DataSnowflakeApiIntegrationsApiIntegrationsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeApiIntegrationsApiIntegrations <a name="DataSnowflakeApiIntegrationsApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeApiIntegrationsApiIntegrations: dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations = { ... }
```


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput: dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput = { ... }
```


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeApiIntegrationsApiIntegrationsShowOutput: dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput = { ... }
```


### DataSnowflakeApiIntegrationsConfig <a name="DataSnowflakeApiIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

const dataSnowflakeApiIntegrationsConfig: dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations#like DataSnowflakeApiIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/data-sources/api_integrations#with_describe DataSnowflakeApiIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl">azureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount">googleApiServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience">googleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername">oauthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates">tlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```typescript
public readonly apiAwsExternalId: string;
```

- *Type:* string

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```typescript
public readonly apiAwsIamUserArn: string;
```

- *Type:* string

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl"></a>

```typescript
public readonly azureConsentUrl: string;
```

- *Type:* string

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```typescript
public readonly azureMultiTenantAppName: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `googleApiServiceAccount`<sup>Required</sup> <a name="googleApiServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```typescript
public readonly googleApiServiceAccount: string;
```

- *Type:* string

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```typescript
public readonly oauthAssertionIssuer: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant"></a>

```typescript
public readonly oauthGrant: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```typescript
public readonly oauthResourceUrl: string;
```

- *Type:* string

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

---

##### `oauthUsername`<sup>Required</sup> <a name="oauthUsername" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername"></a>

```typescript
public readonly oauthUsername: string;
```

- *Type:* string

---

##### `tlsTrustedCertificates`<sup>Required</sup> <a name="tlsTrustedCertificates" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```typescript
public readonly tlsTrustedCertificates: string[];
```

- *Type:* string[]

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType"></a>

```typescript
public readonly userAuthType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsList <a name="DataSnowflakeApiIntegrationsApiIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get"></a>

```typescript
public get(index: number): DataSnowflakeApiIntegrationsApiIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeApiIntegrationsApiIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeApiIntegrations } from '@cdktn/provider-snowflake'

new dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeApiIntegrationsApiIntegrationsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a>

---



