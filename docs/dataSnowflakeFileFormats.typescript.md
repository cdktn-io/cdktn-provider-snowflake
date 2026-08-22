# `dataSnowflakeFileFormats` Submodule <a name="`dataSnowflakeFileFormats` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFileFormats <a name="DataSnowflakeFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats snowflake_file_formats}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormats(scope: Construct, id: string, config?: DataSnowflakeFileFormatsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig">DataSnowflakeFileFormatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig">DataSnowflakeFileFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn"></a>

```typescript
public putIn(value: DataSnowflakeFileFormatsIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeFileFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeFileFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFileFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats">fileFormats</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fileFormats`<sup>Required</sup> <a name="fileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats"></a>

```typescript
public readonly fileFormats: DataSnowflakeFileFormatsFileFormatsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in"></a>

```typescript
public readonly in: DataSnowflakeFileFormatsInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeFileFormatsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFileFormatsConfig <a name="DataSnowflakeFileFormatsConfig" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

const dataSnowflakeFileFormatsConfig: dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeFileFormatsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#in DataSnowflakeFileFormats#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#like DataSnowflakeFileFormats#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#with_describe DataSnowflakeFileFormats#with_describe}

---

### DataSnowflakeFileFormatsFileFormats <a name="DataSnowflakeFileFormatsFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

const dataSnowflakeFileFormatsFileFormats: dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats = { ... }
```


### DataSnowflakeFileFormatsFileFormatsDescribeOutput <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

const dataSnowflakeFileFormatsFileFormatsDescribeOutput: dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput = { ... }
```


### DataSnowflakeFileFormatsFileFormatsShowOutput <a name="DataSnowflakeFileFormatsFileFormatsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

const dataSnowflakeFileFormatsFileFormatsShowOutput: dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput = { ... }
```


### DataSnowflakeFileFormatsIn <a name="DataSnowflakeFileFormatsIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

const dataSnowflakeFileFormatsIn: dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#account DataSnowflakeFileFormats#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFileFormatsFileFormatsDescribeOutputList <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal">enableOctal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader">parseHeader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8">validateUtf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `validateUtf8`<sup>Required</sup> <a name="validateUtf8" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8"></a>

```typescript
public readonly validateUtf8: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeFileFormatsFileFormatsDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a>

---


### DataSnowflakeFileFormatsFileFormatsList <a name="DataSnowflakeFileFormatsFileFormatsList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get"></a>

```typescript
public get(index: number): DataSnowflakeFileFormatsFileFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeFileFormatsFileFormatsOutputReference <a name="DataSnowflakeFileFormatsFileFormatsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeFileFormatsFileFormatsDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeFileFormatsFileFormatsShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeFileFormatsFileFormats;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a>

---


### DataSnowflakeFileFormatsFileFormatsShowOutputList <a name="DataSnowflakeFileFormatsFileFormatsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions">formatOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeFileFormatsFileFormatsShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a>

---


### DataSnowflakeFileFormatsInOutputReference <a name="DataSnowflakeFileFormatsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeFileFormats } from '@cdktn/provider-snowflake'

new dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeFileFormatsIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---



