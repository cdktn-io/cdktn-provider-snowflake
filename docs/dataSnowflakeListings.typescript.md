# `dataSnowflakeListings` Submodule <a name="`dataSnowflakeListings` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeListings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeListings <a name="DataSnowflakeListings" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings snowflake_listings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListings(scope: Construct, id: string, config?: DataSnowflakeListingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig">DataSnowflakeListingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig">DataSnowflakeListingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeListingsLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeListings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isConstruct"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

dataSnowflakeListings.DataSnowflakeListings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformElement"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

dataSnowflakeListings.DataSnowflakeListings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

dataSnowflakeListings.DataSnowflakeListings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeListings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeListings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeListings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeListings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference">DataSnowflakeListingsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.listings">listings</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList">DataSnowflakeListingsListingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeListingsLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference">DataSnowflakeListingsLimitOutputReference</a>

---

##### `listings`<sup>Required</sup> <a name="listings" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.listings"></a>

```typescript
public readonly listings: DataSnowflakeListingsListingsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList">DataSnowflakeListingsListingsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeListingsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeListingsConfig <a name="DataSnowflakeListingsConfig" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

const dataSnowflakeListingsConfig: dataSnowflakeListings.DataSnowflakeListingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#id DataSnowflakeListings#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC LISTING for each listing returned by SHOW LISTINGS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#id DataSnowflakeListings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#like DataSnowflakeListings#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeListingsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#limit DataSnowflakeListings#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#starts_with DataSnowflakeListings#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC LISTING for each listing returned by SHOW LISTINGS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#with_describe DataSnowflakeListings#with_describe}

---

### DataSnowflakeListingsLimit <a name="DataSnowflakeListingsLimit" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

const dataSnowflakeListingsLimit: dataSnowflakeListings.DataSnowflakeListingsLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#rows DataSnowflakeListings#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/listings#from DataSnowflakeListings#from}

---

### DataSnowflakeListingsListings <a name="DataSnowflakeListingsListings" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListings.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

const dataSnowflakeListingsListings: dataSnowflakeListings.DataSnowflakeListingsListings = { ... }
```


### DataSnowflakeListingsListingsDescribeOutput <a name="DataSnowflakeListingsListingsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

const dataSnowflakeListingsListingsDescribeOutput: dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutput = { ... }
```


### DataSnowflakeListingsListingsShowOutput <a name="DataSnowflakeListingsListingsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

const dataSnowflakeListingsListingsShowOutput: dataSnowflakeListings.DataSnowflakeListingsListingsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeListingsLimitOutputReference <a name="DataSnowflakeListingsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeListingsLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsLimit">DataSnowflakeListingsLimit</a>

---


### DataSnowflakeListingsListingsDescribeOutputList <a name="DataSnowflakeListingsListingsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeListingsListingsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeListingsListingsDescribeOutputOutputReference <a name="DataSnowflakeListingsListingsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.applicationPackage">applicationPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.approverContact">approverContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.businessNeeds">businessNeeds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.categories">categories</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.customizedContactInfo">customizedContactInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataAttributes">dataAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataDictionary">dataDictionary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataPreview">dataPreview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.globalName">globalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isApplication">isApplication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isByRequest">isByRequest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isLimitedTrial">isLimitedTrial</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isMonetized">isMonetized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isMountlessQueryable">isMountlessQueryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isShare">isShare</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isTargeted">isTargeted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionAlias">lastCommittedVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionName">lastCommittedVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionUri">lastCommittedVersionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.legacyUniformListingLocators">legacyUniformListingLocators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.limitedTrialPlan">limitedTrialPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.listingTerms">listingTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.liveVersionUri">liveVersionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.manifestYaml">manifestYaml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.monetizationDisplayOrder">monetizationDisplayOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.organizationProfileName">organizationProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedOn">publishedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionAlias">publishedVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionName">publishedVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionUri">publishedVersionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.refreshSchedule">refreshSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.refreshType">refreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.regions">regions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.rejectionReason">rejectionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.requestApprovalType">requestApprovalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.resources">resources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.retriedOn">retriedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.reviewState">reviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.revisions">revisions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.scheduledDropTime">scheduledDropTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.share">share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.subtitle">subtitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.supportContact">supportContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.targetAccounts">targetAccounts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.trialDetails">trialDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.uniformListingLocator">uniformListingLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.unpublishedByAdminReasons">unpublishedByAdminReasons</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.usageExamples">usageExamples</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutput">DataSnowflakeListingsListingsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPackage`<sup>Required</sup> <a name="applicationPackage" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.applicationPackage"></a>

```typescript
public readonly applicationPackage: string;
```

- *Type:* string

---

##### `approverContact`<sup>Required</sup> <a name="approverContact" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.approverContact"></a>

```typescript
public readonly approverContact: string;
```

- *Type:* string

---

##### `businessNeeds`<sup>Required</sup> <a name="businessNeeds" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.businessNeeds"></a>

```typescript
public readonly businessNeeds: string;
```

- *Type:* string

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.categories"></a>

```typescript
public readonly categories: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `customizedContactInfo`<sup>Required</sup> <a name="customizedContactInfo" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.customizedContactInfo"></a>

```typescript
public readonly customizedContactInfo: string;
```

- *Type:* string

---

##### `dataAttributes`<sup>Required</sup> <a name="dataAttributes" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataAttributes"></a>

```typescript
public readonly dataAttributes: string;
```

- *Type:* string

---

##### `dataDictionary`<sup>Required</sup> <a name="dataDictionary" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataDictionary"></a>

```typescript
public readonly dataDictionary: string;
```

- *Type:* string

---

##### `dataPreview`<sup>Required</sup> <a name="dataPreview" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.dataPreview"></a>

```typescript
public readonly dataPreview: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `globalName`<sup>Required</sup> <a name="globalName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.globalName"></a>

```typescript
public readonly globalName: string;
```

- *Type:* string

---

##### `isApplication`<sup>Required</sup> <a name="isApplication" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isApplication"></a>

```typescript
public readonly isApplication: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isByRequest`<sup>Required</sup> <a name="isByRequest" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isByRequest"></a>

```typescript
public readonly isByRequest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isLimitedTrial`<sup>Required</sup> <a name="isLimitedTrial" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isLimitedTrial"></a>

```typescript
public readonly isLimitedTrial: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isMonetized`<sup>Required</sup> <a name="isMonetized" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isMonetized"></a>

```typescript
public readonly isMonetized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isMountlessQueryable`<sup>Required</sup> <a name="isMountlessQueryable" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isMountlessQueryable"></a>

```typescript
public readonly isMountlessQueryable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isShare`<sup>Required</sup> <a name="isShare" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isShare"></a>

```typescript
public readonly isShare: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isTargeted`<sup>Required</sup> <a name="isTargeted" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.isTargeted"></a>

```typescript
public readonly isTargeted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastCommittedVersionAlias`<sup>Required</sup> <a name="lastCommittedVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionAlias"></a>

```typescript
public readonly lastCommittedVersionAlias: string;
```

- *Type:* string

---

##### `lastCommittedVersionName`<sup>Required</sup> <a name="lastCommittedVersionName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionName"></a>

```typescript
public readonly lastCommittedVersionName: string;
```

- *Type:* string

---

##### `lastCommittedVersionUri`<sup>Required</sup> <a name="lastCommittedVersionUri" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.lastCommittedVersionUri"></a>

```typescript
public readonly lastCommittedVersionUri: string;
```

- *Type:* string

---

##### `legacyUniformListingLocators`<sup>Required</sup> <a name="legacyUniformListingLocators" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.legacyUniformListingLocators"></a>

```typescript
public readonly legacyUniformListingLocators: string;
```

- *Type:* string

---

##### `limitedTrialPlan`<sup>Required</sup> <a name="limitedTrialPlan" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.limitedTrialPlan"></a>

```typescript
public readonly limitedTrialPlan: string;
```

- *Type:* string

---

##### `listingTerms`<sup>Required</sup> <a name="listingTerms" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.listingTerms"></a>

```typescript
public readonly listingTerms: string;
```

- *Type:* string

---

##### `liveVersionUri`<sup>Required</sup> <a name="liveVersionUri" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.liveVersionUri"></a>

```typescript
public readonly liveVersionUri: string;
```

- *Type:* string

---

##### `manifestYaml`<sup>Required</sup> <a name="manifestYaml" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.manifestYaml"></a>

```typescript
public readonly manifestYaml: string;
```

- *Type:* string

---

##### `monetizationDisplayOrder`<sup>Required</sup> <a name="monetizationDisplayOrder" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.monetizationDisplayOrder"></a>

```typescript
public readonly monetizationDisplayOrder: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationProfileName`<sup>Required</sup> <a name="organizationProfileName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.organizationProfileName"></a>

```typescript
public readonly organizationProfileName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `publishedOn`<sup>Required</sup> <a name="publishedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedOn"></a>

```typescript
public readonly publishedOn: string;
```

- *Type:* string

---

##### `publishedVersionAlias`<sup>Required</sup> <a name="publishedVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionAlias"></a>

```typescript
public readonly publishedVersionAlias: string;
```

- *Type:* string

---

##### `publishedVersionName`<sup>Required</sup> <a name="publishedVersionName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionName"></a>

```typescript
public readonly publishedVersionName: string;
```

- *Type:* string

---

##### `publishedVersionUri`<sup>Required</sup> <a name="publishedVersionUri" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.publishedVersionUri"></a>

```typescript
public readonly publishedVersionUri: string;
```

- *Type:* string

---

##### `refreshSchedule`<sup>Required</sup> <a name="refreshSchedule" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.refreshSchedule"></a>

```typescript
public readonly refreshSchedule: string;
```

- *Type:* string

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.refreshType"></a>

```typescript
public readonly refreshType: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.regions"></a>

```typescript
public readonly regions: string;
```

- *Type:* string

---

##### `rejectionReason`<sup>Required</sup> <a name="rejectionReason" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.rejectionReason"></a>

```typescript
public readonly rejectionReason: string;
```

- *Type:* string

---

##### `requestApprovalType`<sup>Required</sup> <a name="requestApprovalType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.requestApprovalType"></a>

```typescript
public readonly requestApprovalType: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.resources"></a>

```typescript
public readonly resources: string;
```

- *Type:* string

---

##### `retriedOn`<sup>Required</sup> <a name="retriedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.retriedOn"></a>

```typescript
public readonly retriedOn: string;
```

- *Type:* string

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.reviewState"></a>

```typescript
public readonly reviewState: string;
```

- *Type:* string

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.revisions"></a>

```typescript
public readonly revisions: string;
```

- *Type:* string

---

##### `scheduledDropTime`<sup>Required</sup> <a name="scheduledDropTime" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.scheduledDropTime"></a>

```typescript
public readonly scheduledDropTime: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.subtitle"></a>

```typescript
public readonly subtitle: string;
```

- *Type:* string

---

##### `supportContact`<sup>Required</sup> <a name="supportContact" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.supportContact"></a>

```typescript
public readonly supportContact: string;
```

- *Type:* string

---

##### `targetAccounts`<sup>Required</sup> <a name="targetAccounts" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.targetAccounts"></a>

```typescript
public readonly targetAccounts: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `trialDetails`<sup>Required</sup> <a name="trialDetails" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.trialDetails"></a>

```typescript
public readonly trialDetails: string;
```

- *Type:* string

---

##### `uniformListingLocator`<sup>Required</sup> <a name="uniformListingLocator" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.uniformListingLocator"></a>

```typescript
public readonly uniformListingLocator: string;
```

- *Type:* string

---

##### `unpublishedByAdminReasons`<sup>Required</sup> <a name="unpublishedByAdminReasons" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.unpublishedByAdminReasons"></a>

```typescript
public readonly unpublishedByAdminReasons: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `usageExamples`<sup>Required</sup> <a name="usageExamples" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.usageExamples"></a>

```typescript
public readonly usageExamples: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeListingsListingsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutput">DataSnowflakeListingsListingsDescribeOutput</a>

---


### DataSnowflakeListingsListingsList <a name="DataSnowflakeListingsListingsList" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.get"></a>

```typescript
public get(index: number): DataSnowflakeListingsListingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeListingsListingsOutputReference <a name="DataSnowflakeListingsListingsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList">DataSnowflakeListingsListingsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList">DataSnowflakeListingsListingsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListings">DataSnowflakeListingsListings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeListingsListingsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsDescribeOutputList">DataSnowflakeListingsListingsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeListingsListingsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList">DataSnowflakeListingsListingsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeListingsListings;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListings">DataSnowflakeListingsListings</a>

---


### DataSnowflakeListingsListingsShowOutputList <a name="DataSnowflakeListingsListingsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeListingsListingsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeListingsListingsShowOutputOutputReference <a name="DataSnowflakeListingsListingsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeListings } from '@cdktn/provider-snowflake'

new dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.detailedTargetAccounts">detailedTargetAccounts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.globalName">globalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isApplication">isApplication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isByRequest">isByRequest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isLimitedTrial">isLimitedTrial</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isMonetized">isMonetized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isMountlessQueryable">isMountlessQueryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isTargeted">isTargeted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.organizationProfileName">organizationProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.publishedOn">publishedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.regions">regions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.rejectedOn">rejectedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.reviewState">reviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.subtitle">subtitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.targetAccounts">targetAccounts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.uniformListingLocator">uniformListingLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutput">DataSnowflakeListingsListingsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `detailedTargetAccounts`<sup>Required</sup> <a name="detailedTargetAccounts" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.detailedTargetAccounts"></a>

```typescript
public readonly detailedTargetAccounts: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `globalName`<sup>Required</sup> <a name="globalName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.globalName"></a>

```typescript
public readonly globalName: string;
```

- *Type:* string

---

##### `isApplication`<sup>Required</sup> <a name="isApplication" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isApplication"></a>

```typescript
public readonly isApplication: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isByRequest`<sup>Required</sup> <a name="isByRequest" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isByRequest"></a>

```typescript
public readonly isByRequest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isLimitedTrial`<sup>Required</sup> <a name="isLimitedTrial" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isLimitedTrial"></a>

```typescript
public readonly isLimitedTrial: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isMonetized`<sup>Required</sup> <a name="isMonetized" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isMonetized"></a>

```typescript
public readonly isMonetized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isMountlessQueryable`<sup>Required</sup> <a name="isMountlessQueryable" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isMountlessQueryable"></a>

```typescript
public readonly isMountlessQueryable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isTargeted`<sup>Required</sup> <a name="isTargeted" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.isTargeted"></a>

```typescript
public readonly isTargeted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationProfileName`<sup>Required</sup> <a name="organizationProfileName" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.organizationProfileName"></a>

```typescript
public readonly organizationProfileName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `publishedOn`<sup>Required</sup> <a name="publishedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.publishedOn"></a>

```typescript
public readonly publishedOn: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.regions"></a>

```typescript
public readonly regions: string;
```

- *Type:* string

---

##### `rejectedOn`<sup>Required</sup> <a name="rejectedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.rejectedOn"></a>

```typescript
public readonly rejectedOn: string;
```

- *Type:* string

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.reviewState"></a>

```typescript
public readonly reviewState: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.subtitle"></a>

```typescript
public readonly subtitle: string;
```

- *Type:* string

---

##### `targetAccounts`<sup>Required</sup> <a name="targetAccounts" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.targetAccounts"></a>

```typescript
public readonly targetAccounts: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `uniformListingLocator`<sup>Required</sup> <a name="uniformListingLocator" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.uniformListingLocator"></a>

```typescript
public readonly uniformListingLocator: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeListingsListingsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeListings.DataSnowflakeListingsListingsShowOutput">DataSnowflakeListingsListingsShowOutput</a>

---



