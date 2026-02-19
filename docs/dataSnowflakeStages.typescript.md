# `dataSnowflakeStages` Submodule <a name="`dataSnowflakeStages` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStages <a name="DataSnowflakeStages" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages snowflake_stages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStages(scope: Construct, id: string, config?: DataSnowflakeStagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig">DataSnowflakeStagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig">DataSnowflakeStagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.putIn"></a>

```typescript
public putIn(value: DataSnowflakeStagesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeStages resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isConstruct"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

dataSnowflakeStages.DataSnowflakeStages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformElement"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

dataSnowflakeStages.DataSnowflakeStages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

dataSnowflakeStages.DataSnowflakeStages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataSnowflakeStages resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeStages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference">DataSnowflakeStagesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList">DataSnowflakeStagesStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.in"></a>

```typescript
public readonly in: DataSnowflakeStagesInOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference">DataSnowflakeStagesInOutputReference</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.stages"></a>

```typescript
public readonly stages: DataSnowflakeStagesStagesList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList">DataSnowflakeStagesStagesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeStagesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStagesConfig <a name="DataSnowflakeStagesConfig" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesConfig: dataSnowflakeStages.DataSnowflakeStagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#id DataSnowflakeStages#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC STAGE for each stage returned by SHOW STAGES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#id DataSnowflakeStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeStagesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#in DataSnowflakeStages#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#like DataSnowflakeStages#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Runs DESC STAGE for each stage returned by SHOW STAGES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#with_describe DataSnowflakeStages#with_describe}

---

### DataSnowflakeStagesIn <a name="DataSnowflakeStagesIn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesIn: dataSnowflakeStages.DataSnowflakeStagesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.application">application</a></code> | <code>string</code> | Returns records for the specified application. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.applicationPackage">applicationPackage</a></code> | <code>string</code> | Returns records for the specified application package. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#account DataSnowflakeStages#account}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#application DataSnowflakeStages#application}

---

##### `applicationPackage`<sup>Optional</sup> <a name="applicationPackage" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.applicationPackage"></a>

```typescript
public readonly applicationPackage: string;
```

- *Type:* string

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#application_package DataSnowflakeStages#application_package}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#database DataSnowflakeStages#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/data-sources/stages#schema DataSnowflakeStages#schema}

---

### DataSnowflakeStagesStages <a name="DataSnowflakeStagesStages" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStages.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStages: dataSnowflakeStages.DataSnowflakeStagesStages = { ... }
```


### DataSnowflakeStagesStagesDescribeOutput <a name="DataSnowflakeStagesStagesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutput: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutput = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputDirectoryTable <a name="DataSnowflakeStagesStagesDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTable.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputDirectoryTable: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTable = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormat <a name="DataSnowflakeStagesStagesDescribeOutputFileFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormat.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormat: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormat = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatAvro <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvro.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatAvro: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvro = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatCsv <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsv.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatCsv: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsv = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatJson <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJson.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatJson: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJson = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatOrc <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrc.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatOrc: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrc = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatParquet <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquet.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatParquet: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquet = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputFileFormatXml <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXml.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputFileFormatXml: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXml = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputLocation <a name="DataSnowflakeStagesStagesDescribeOutputLocation" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocation.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputLocation: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocation = { ... }
```


### DataSnowflakeStagesStagesDescribeOutputPrivatelink <a name="DataSnowflakeStagesStagesDescribeOutputPrivatelink" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelink.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesDescribeOutputPrivatelink: dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelink = { ... }
```


### DataSnowflakeStagesStagesShowOutput <a name="DataSnowflakeStagesStagesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

const dataSnowflakeStagesStagesShowOutput: dataSnowflakeStages.DataSnowflakeStagesStagesShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStagesInOutputReference <a name="DataSnowflakeStagesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetApplicationPackage">resetApplicationPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetApplication` <a name="resetApplication" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetApplicationPackage` <a name="resetApplicationPackage" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetApplicationPackage"></a>

```typescript
public resetApplicationPackage(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationPackageInput">applicationPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationPackage">applicationPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `applicationPackageInput`<sup>Optional</sup> <a name="applicationPackageInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationPackageInput"></a>

```typescript
public readonly applicationPackageInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `applicationPackage`<sup>Required</sup> <a name="applicationPackage" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.applicationPackage"></a>

```typescript
public readonly applicationPackage: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesIn;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesIn">DataSnowflakeStagesIn</a>

---


### DataSnowflakeStagesStagesDescribeOutputDirectoryTableList <a name="DataSnowflakeStagesStagesDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTable">DataSnowflakeStagesStagesDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputDirectoryTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTable">DataSnowflakeStagesStagesDescribeOutputDirectoryTable</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvro">DataSnowflakeStagesStagesDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvro">DataSnowflakeStagesStagesDescribeOutputFileFormatAvro</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parseHeader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validateUtf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsv">DataSnowflakeStagesStagesDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validateUtf8`<sup>Required</sup> <a name="validateUtf8" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```typescript
public readonly validateUtf8: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsv">DataSnowflakeStagesStagesDescribeOutputFileFormatCsv</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enableOctal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJson">DataSnowflakeStagesStagesDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJson">DataSnowflakeStagesStagesDescribeOutputFileFormatJson</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrc">DataSnowflakeStagesStagesDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrc">DataSnowflakeStagesStagesDescribeOutputFileFormatOrc</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList">DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList">DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.formatName">formatName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList">DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList">DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList">DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList">DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormat">DataSnowflakeStagesStagesDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList">DataSnowflakeStagesStagesDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList">DataSnowflakeStagesStagesDescribeOutputFileFormatCsvList</a>

---

##### `formatName`<sup>Required</sup> <a name="formatName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList">DataSnowflakeStagesStagesDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.orc"></a>

```typescript
public readonly orc: DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList">DataSnowflakeStagesStagesDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList">DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.xml"></a>

```typescript
public readonly xml: DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList">DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormat">DataSnowflakeStagesStagesDescribeOutputFileFormat</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquet">DataSnowflakeStagesStagesDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatParquet">DataSnowflakeStagesStagesDescribeOutputFileFormatParquet</a>

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXml">DataSnowflakeStagesStagesDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatXml">DataSnowflakeStagesStagesDescribeOutputFileFormatXml</a>

---


### DataSnowflakeStagesStagesDescribeOutputList <a name="DataSnowflakeStagesStagesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputLocationList <a name="DataSnowflakeStagesStagesDescribeOutputLocationList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputLocationOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.awsAccessPointArn">awsAccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.url">url</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocation">DataSnowflakeStagesStagesDescribeOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccessPointArn`<sup>Required</sup> <a name="awsAccessPointArn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.awsAccessPointArn"></a>

```typescript
public readonly awsAccessPointArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.url"></a>

```typescript
public readonly url: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputLocation;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocation">DataSnowflakeStagesStagesDescribeOutputLocation</a>

---


### DataSnowflakeStagesStagesDescribeOutputOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.directoryTable">directoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList">DataSnowflakeStagesStagesDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList">DataSnowflakeStagesStagesDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList">DataSnowflakeStagesStagesDescribeOutputLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.privatelink">privatelink</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList">DataSnowflakeStagesStagesDescribeOutputPrivatelinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutput">DataSnowflakeStagesStagesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryTable`<sup>Required</sup> <a name="directoryTable" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.directoryTable"></a>

```typescript
public readonly directoryTable: DataSnowflakeStagesStagesDescribeOutputDirectoryTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputDirectoryTableList">DataSnowflakeStagesStagesDescribeOutputDirectoryTableList</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: DataSnowflakeStagesStagesDescribeOutputFileFormatList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputFileFormatList">DataSnowflakeStagesStagesDescribeOutputFileFormatList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.location"></a>

```typescript
public readonly location: DataSnowflakeStagesStagesDescribeOutputLocationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputLocationList">DataSnowflakeStagesStagesDescribeOutputLocationList</a>

---

##### `privatelink`<sup>Required</sup> <a name="privatelink" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.privatelink"></a>

```typescript
public readonly privatelink: DataSnowflakeStagesStagesDescribeOutputPrivatelinkList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList">DataSnowflakeStagesStagesDescribeOutputPrivatelinkList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutput">DataSnowflakeStagesStagesDescribeOutput</a>

---


### DataSnowflakeStagesStagesDescribeOutputPrivatelinkList <a name="DataSnowflakeStagesStagesDescribeOutputPrivatelinkList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference <a name="DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelink">DataSnowflakeStagesStagesDescribeOutputPrivatelink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesDescribeOutputPrivatelink;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputPrivatelink">DataSnowflakeStagesStagesDescribeOutputPrivatelink</a>

---


### DataSnowflakeStagesStagesList <a name="DataSnowflakeStagesStagesList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesOutputReference <a name="DataSnowflakeStagesStagesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList">DataSnowflakeStagesStagesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList">DataSnowflakeStagesStagesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStages">DataSnowflakeStagesStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeStagesStagesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesDescribeOutputList">DataSnowflakeStagesStagesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeStagesStagesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList">DataSnowflakeStagesStagesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStages;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStages">DataSnowflakeStagesStages</a>

---


### DataSnowflakeStagesStagesShowOutputList <a name="DataSnowflakeStagesStagesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeStagesStagesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeStagesStagesShowOutputOutputReference <a name="DataSnowflakeStagesStagesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeStages } from '@cdktn/provider-snowflake'

new dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.directoryEnabled">directoryEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.hasCredentials">hasCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.hasEncryptionKey">hasEncryptionKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutput">DataSnowflakeStagesStagesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `directoryEnabled`<sup>Required</sup> <a name="directoryEnabled" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.directoryEnabled"></a>

```typescript
public readonly directoryEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `hasCredentials`<sup>Required</sup> <a name="hasCredentials" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.hasCredentials"></a>

```typescript
public readonly hasCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hasEncryptionKey`<sup>Required</sup> <a name="hasEncryptionKey" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.hasEncryptionKey"></a>

```typescript
public readonly hasEncryptionKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeStagesStagesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStages.DataSnowflakeStagesStagesShowOutput">DataSnowflakeStagesStagesShowOutput</a>

---



