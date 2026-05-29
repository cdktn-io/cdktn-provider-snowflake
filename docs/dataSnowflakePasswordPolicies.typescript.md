# `dataSnowflakePasswordPolicies` Submodule <a name="`dataSnowflakePasswordPolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePasswordPolicies <a name="DataSnowflakePasswordPolicies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies snowflake_password_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies(scope: Construct, id: string, config?: DataSnowflakePasswordPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig">DataSnowflakePasswordPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig">DataSnowflakePasswordPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn">putOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOn">resetOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn"></a>

```typescript
public putIn(value: DataSnowflakePasswordPoliciesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakePasswordPoliciesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

---

##### `putOn` <a name="putOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn"></a>

```typescript
public putOn(value: DataSnowflakePasswordPoliciesOn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.putOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOn` <a name="resetOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetOn"></a>

```typescript
public resetOn(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakePasswordPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakePasswordPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakePasswordPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakePasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference">DataSnowflakePasswordPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference">DataSnowflakePasswordPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.on">on</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference">DataSnowflakePasswordPoliciesOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.passwordPolicies">passwordPolicies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList">DataSnowflakePasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.onInput">onInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.in"></a>

```typescript
public readonly in: DataSnowflakePasswordPoliciesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference">DataSnowflakePasswordPoliciesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limit"></a>

```typescript
public readonly limit: DataSnowflakePasswordPoliciesLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference">DataSnowflakePasswordPoliciesLimitOutputReference</a>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.on"></a>

```typescript
public readonly on: DataSnowflakePasswordPoliciesOnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference">DataSnowflakePasswordPoliciesOnOutputReference</a>

---

##### `passwordPolicies`<sup>Required</sup> <a name="passwordPolicies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: DataSnowflakePasswordPoliciesPasswordPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList">DataSnowflakePasswordPoliciesPasswordPoliciesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakePasswordPoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakePasswordPoliciesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.onInput"></a>

```typescript
public readonly onInput: DataSnowflakePasswordPoliciesOn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePasswordPoliciesConfig <a name="DataSnowflakePasswordPoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesConfig: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.on">on</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#id DataSnowflakePasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakePasswordPoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#in DataSnowflakePasswordPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#like DataSnowflakePasswordPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakePasswordPoliciesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#limit DataSnowflakePasswordPolicies#limit}

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.on"></a>

```typescript
public readonly on: DataSnowflakePasswordPoliciesOn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#on DataSnowflakePasswordPolicies#on}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#starts_with DataSnowflakePasswordPolicies#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC PASSWORD POLICY for each password policy returned by SHOW PASSWORD POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#with_describe DataSnowflakePasswordPolicies#with_describe}

---

### DataSnowflakePasswordPoliciesIn <a name="DataSnowflakePasswordPoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesIn: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.application">application</a></code> | <code>string</code> | Returns records for the specified application. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.applicationPackage">applicationPackage</a></code> | <code>string</code> | Returns records for the specified application package. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#application DataSnowflakePasswordPolicies#application}

---

##### `applicationPackage`<sup>Optional</sup> <a name="applicationPackage" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.applicationPackage"></a>

```typescript
public readonly applicationPackage: string;
```

- *Type:* string

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#application_package DataSnowflakePasswordPolicies#application_package}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#database DataSnowflakePasswordPolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#schema DataSnowflakePasswordPolicies#schema}

---

### DataSnowflakePasswordPoliciesLimit <a name="DataSnowflakePasswordPoliciesLimit" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesLimit: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#rows DataSnowflakePasswordPolicies#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#from DataSnowflakePasswordPolicies#from}

---

### DataSnowflakePasswordPoliciesOn <a name="DataSnowflakePasswordPoliciesOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesOn: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.user">user</a></code> | <code>string</code> | Returns records for the specified user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#account DataSnowflakePasswordPolicies#account}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/data-sources/password_policies#user DataSnowflakePasswordPolicies#user}

---

### DataSnowflakePasswordPoliciesPasswordPolicies <a name="DataSnowflakePasswordPoliciesPasswordPolicies" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesPasswordPolicies: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies = { ... }
```


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput = { ... }
```


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

const dataSnowflakePasswordPoliciesPasswordPoliciesShowOutput: dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePasswordPoliciesInOutputReference <a name="DataSnowflakePasswordPoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplicationPackage">resetApplicationPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetApplication` <a name="resetApplication" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetApplicationPackage` <a name="resetApplicationPackage" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetApplicationPackage"></a>

```typescript
public resetApplicationPackage(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackageInput">applicationPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackage">applicationPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `applicationPackageInput`<sup>Optional</sup> <a name="applicationPackageInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackageInput"></a>

```typescript
public readonly applicationPackageInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `applicationPackage`<sup>Required</sup> <a name="applicationPackage" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.applicationPackage"></a>

```typescript
public readonly applicationPackage: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesIn">DataSnowflakePasswordPoliciesIn</a>

---


### DataSnowflakePasswordPoliciesLimitOutputReference <a name="DataSnowflakePasswordPoliciesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesLimit;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesLimit">DataSnowflakePasswordPoliciesLimit</a>

---


### DataSnowflakePasswordPoliciesOnOutputReference <a name="DataSnowflakePasswordPoliciesOnOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesOn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesOn">DataSnowflakePasswordPoliciesOn</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordHistory">passwordHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordLockoutTimeMins">passwordLockoutTimeMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxLength">passwordMaxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxRetries">passwordMaxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinAgeDays">passwordMinAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLength">passwordMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLowerCaseChars">passwordMinLowerCaseChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinNumericChars">passwordMinNumericChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinSpecialChars">passwordMinSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinUpperCaseChars">passwordMinUpperCaseChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `passwordHistory`<sup>Required</sup> <a name="passwordHistory" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordHistory"></a>

```typescript
public readonly passwordHistory: number;
```

- *Type:* number

---

##### `passwordLockoutTimeMins`<sup>Required</sup> <a name="passwordLockoutTimeMins" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordLockoutTimeMins"></a>

```typescript
public readonly passwordLockoutTimeMins: number;
```

- *Type:* number

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxAgeDays"></a>

```typescript
public readonly passwordMaxAgeDays: number;
```

- *Type:* number

---

##### `passwordMaxLength`<sup>Required</sup> <a name="passwordMaxLength" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxLength"></a>

```typescript
public readonly passwordMaxLength: number;
```

- *Type:* number

---

##### `passwordMaxRetries`<sup>Required</sup> <a name="passwordMaxRetries" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMaxRetries"></a>

```typescript
public readonly passwordMaxRetries: number;
```

- *Type:* number

---

##### `passwordMinAgeDays`<sup>Required</sup> <a name="passwordMinAgeDays" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinAgeDays"></a>

```typescript
public readonly passwordMinAgeDays: number;
```

- *Type:* number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLength"></a>

```typescript
public readonly passwordMinLength: number;
```

- *Type:* number

---

##### `passwordMinLowerCaseChars`<sup>Required</sup> <a name="passwordMinLowerCaseChars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinLowerCaseChars"></a>

```typescript
public readonly passwordMinLowerCaseChars: number;
```

- *Type:* number

---

##### `passwordMinNumericChars`<sup>Required</sup> <a name="passwordMinNumericChars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinNumericChars"></a>

```typescript
public readonly passwordMinNumericChars: number;
```

- *Type:* number

---

##### `passwordMinSpecialChars`<sup>Required</sup> <a name="passwordMinSpecialChars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinSpecialChars"></a>

```typescript
public readonly passwordMinSpecialChars: number;
```

- *Type:* number

---

##### `passwordMinUpperCaseChars`<sup>Required</sup> <a name="passwordMinUpperCaseChars" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.passwordMinUpperCaseChars"></a>

```typescript
public readonly passwordMinUpperCaseChars: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutput</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get"></a>

```typescript
public get(index: number): DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies">DataSnowflakePasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesPasswordPolicies;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPolicies">DataSnowflakePasswordPoliciesPasswordPolicies</a>

---


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference <a name="DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakePasswordPolicies } from '@cdktn/provider-snowflake'

new dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePasswordPolicies.DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput">DataSnowflakePasswordPoliciesPasswordPoliciesShowOutput</a>

---



