# `dataSnowflakeStorageLifecyclePolicies` Submodule <a name="`dataSnowflakeStorageLifecyclePolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies(scope: Construct, id: string, config?: DataSnowflakeStorageLifecyclePoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig">DataSnowflakeStorageLifecyclePoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig">DataSnowflakeStorageLifecyclePoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn"></a>

```typescript
public putIn(value: DataSnowflakeStorageLifecyclePoliciesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeStorageLifecyclePolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeStorageLifecyclePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStorageLifecyclePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies">storageLifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in"></a>

```typescript
public readonly in: DataSnowflakeStorageLifecyclePoliciesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a>

---

##### `storageLifecyclePolicies`<sup>Required</sup> <a name="storageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies"></a>

```typescript
public readonly storageLifecyclePolicies: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeStorageLifecyclePoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStorageLifecyclePoliciesConfig <a name="DataSnowflakeStorageLifecyclePoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesConfig: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeStorageLifecyclePoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

### DataSnowflakeStorageLifecyclePoliciesIn <a name="DataSnowflakeStorageLifecyclePoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesIn: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}

---

### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies = { ... }
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput = { ... }
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature = { ... }
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

const dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput: dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStorageLifecyclePoliciesInOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageLifecyclePoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays">archiveForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier">archiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays"></a>

```typescript
public readonly archiveForDays: number;
```

- *Type:* number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier"></a>

```typescript
public readonly archiveTier: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature"></a>

```typescript
public readonly signature: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStorageLifecyclePolicies } from '@cdktn/provider-snowflake'

new dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a>

---



