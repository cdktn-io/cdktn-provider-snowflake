# `stageExternalS3Compatible` Submodule <a name="`stageExternalS3Compatible` Submodule" id="@cdktn/provider-snowflake.stageExternalS3Compatible"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalS3Compatible <a name="StageExternalS3Compatible" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible snowflake_stage_external_s3_compatible}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3Compatible(scope: Construct, id: string, config: StageExternalS3CompatibleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig">StageExternalS3CompatibleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig">StageExternalS3CompatibleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory">putDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat">putFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials"></a>

```typescript
public putCredentials(value: StageExternalS3CompatibleCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---

##### `putDirectory` <a name="putDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory"></a>

```typescript
public putDirectory(value: StageExternalS3CompatibleDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---

##### `putFileFormat` <a name="putFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat"></a>

```typescript
public putFileFormat(value: StageExternalS3CompatibleFileFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts"></a>

```typescript
public putTimeouts(value: StageExternalS3CompatibleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

stageExternalS3Compatible.StageExternalS3Compatible.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StageExternalS3Compatible to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StageExternalS3Compatible that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalS3Compatible to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType">stageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput">directoryInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput">fileFormatInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials"></a>

```typescript
public readonly credentials: StageExternalS3CompatibleCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput"></a>

```typescript
public readonly describeOutput: StageExternalS3CompatibleDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a>

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory"></a>

```typescript
public readonly directory: StageExternalS3CompatibleDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalS3CompatibleFileFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput"></a>

```typescript
public readonly showOutput: StageExternalS3CompatibleShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a>

---

##### `stageType`<sup>Required</sup> <a name="stageType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType"></a>

```typescript
public readonly stageType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts"></a>

```typescript
public readonly timeouts: StageExternalS3CompatibleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: StageExternalS3CompatibleCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput"></a>

```typescript
public readonly directoryInput: StageExternalS3CompatibleDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: StageExternalS3CompatibleFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StageExternalS3CompatibleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalS3CompatibleConfig <a name="StageExternalS3CompatibleConfig" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleConfig: stageExternalS3Compatible.StageExternalS3CompatibleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Specifies the endpoint for the S3-compatible storage provider. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url">url</a></code> | <code>string</code> | Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#database StageExternalS3Compatible#database}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Specifies the endpoint for the S3-compatible storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#endpoint StageExternalS3Compatible#endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#name StageExternalS3Compatible#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#schema StageExternalS3Compatible#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#url StageExternalS3Compatible#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#comment StageExternalS3Compatible#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials"></a>

```typescript
public readonly credentials: StageExternalS3CompatibleCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#credentials StageExternalS3Compatible#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory"></a>

```typescript
public readonly directory: StageExternalS3CompatibleDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#directory StageExternalS3Compatible#directory}

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalS3CompatibleFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_format StageExternalS3Compatible#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StageExternalS3CompatibleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timeouts StageExternalS3Compatible#timeouts}

---

### StageExternalS3CompatibleCredentials <a name="StageExternalS3CompatibleCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleCredentials: stageExternalS3Compatible.StageExternalS3CompatibleCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId">awsKeyId</a></code> | <code>string</code> | Specifies the AWS access key ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey">awsSecretKey</a></code> | <code>string</code> | Specifies the AWS secret access key. |

---

##### `awsKeyId`<sup>Required</sup> <a name="awsKeyId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId"></a>

```typescript
public readonly awsKeyId: string;
```

- *Type:* string

Specifies the AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#aws_key_id StageExternalS3Compatible#aws_key_id}

---

##### `awsSecretKey`<sup>Required</sup> <a name="awsSecretKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey"></a>

```typescript
public readonly awsSecretKey: string;
```

- *Type:* string

Specifies the AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#aws_secret_key StageExternalS3Compatible#aws_secret_key}

---

### StageExternalS3CompatibleDescribeOutput <a name="StageExternalS3CompatibleDescribeOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutput: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput = { ... }
```


### StageExternalS3CompatibleDescribeOutputDirectoryTable <a name="StageExternalS3CompatibleDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputDirectoryTable: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormat <a name="StageExternalS3CompatibleDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormat: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatAvro <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatAvro: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatCsv <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatCsv: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatJson <a name="StageExternalS3CompatibleDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatJson: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatOrc <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatOrc: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatParquet <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatParquet: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet = { ... }
```


### StageExternalS3CompatibleDescribeOutputFileFormatXml <a name="StageExternalS3CompatibleDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputFileFormatXml: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml = { ... }
```


### StageExternalS3CompatibleDescribeOutputLocation <a name="StageExternalS3CompatibleDescribeOutputLocation" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDescribeOutputLocation: stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation = { ... }
```


### StageExternalS3CompatibleDirectory <a name="StageExternalS3CompatibleDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleDirectory: stageExternalS3Compatible.StageExternalS3CompatibleDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate">refreshOnCreate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#enable StageExternalS3Compatible#enable}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#auto_refresh StageExternalS3Compatible#auto_refresh}

---

##### `refreshOnCreate`<sup>Optional</sup> <a name="refreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate"></a>

```typescript
public readonly refreshOnCreate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#refresh_on_create StageExternalS3Compatible#refresh_on_create}

---

### StageExternalS3CompatibleFileFormat <a name="StageExternalS3CompatibleFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormat: stageExternalS3Compatible.StageExternalS3CompatibleFileFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName">formatName</a></code> | <code>string</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | xml block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro"></a>

```typescript
public readonly avro: StageExternalS3CompatibleFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#avro StageExternalS3Compatible#avro}

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv"></a>

```typescript
public readonly csv: StageExternalS3CompatibleFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#csv StageExternalS3Compatible#csv}

---

##### `formatName`<sup>Optional</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#format_name StageExternalS3Compatible#format_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json"></a>

```typescript
public readonly json: StageExternalS3CompatibleFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#json StageExternalS3Compatible#json}

---

##### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc"></a>

```typescript
public readonly orc: StageExternalS3CompatibleFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#orc StageExternalS3Compatible#orc}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet"></a>

```typescript
public readonly parquet: StageExternalS3CompatibleFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#parquet StageExternalS3Compatible#parquet}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml"></a>

```typescript
public readonly xml: StageExternalS3CompatibleFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#xml StageExternalS3Compatible#xml}

---

### StageExternalS3CompatibleFileFormatAvro <a name="StageExternalS3CompatibleFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatAvro: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatCsv <a name="StageExternalS3CompatibleFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatCsv: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding">encoding</a></code> | <code>string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape">escape</a></code> | <code>string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine">multiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader">parseHeader</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines">skipBlankLines</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader">skipHeader</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#empty_field_as_null StageExternalS3Compatible#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#encoding StageExternalS3Compatible#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#error_on_column_count_mismatch StageExternalS3Compatible#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#escape StageExternalS3Compatible#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#escape_unenclosed_field StageExternalS3Compatible#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#field_delimiter StageExternalS3Compatible#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#field_optionally_enclosed_by StageExternalS3Compatible#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `parseHeader`<sup>Optional</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader"></a>

```typescript
public readonly parseHeader: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#parse_header StageExternalS3Compatible#parse_header}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#record_delimiter StageExternalS3Compatible#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_blank_lines StageExternalS3Compatible#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_header StageExternalS3Compatible#skip_header}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatJson <a name="StageExternalS3CompatibleFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatJson: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal">enableOctal</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine">multiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#allow_duplicate StageExternalS3Compatible#allow_duplicate}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#enable_octal StageExternalS3Compatible#enable_octal}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_null_values StageExternalS3Compatible#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_outer_array StageExternalS3Compatible#strip_outer_array}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatOrc <a name="StageExternalS3CompatibleFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatOrc: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatParquet <a name="StageExternalS3CompatibleFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatParquet: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText">binaryAsText</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType">useLogicalType</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `binaryAsText`<sup>Optional</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_as_text StageExternalS3Compatible#binary_as_text}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `useLogicalType`<sup>Optional</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#use_logical_type StageExternalS3Compatible#use_logical_type}

---

##### `useVectorizedScanner`<sup>Optional</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#use_vectorized_scanner StageExternalS3Compatible#use_vectorized_scanner}

---

### StageExternalS3CompatibleFileFormatXml <a name="StageExternalS3CompatibleFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleFileFormatXml: stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert">disableAutoConvert</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace">preserveSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement">stripOuterElement</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#disable_auto_convert StageExternalS3Compatible#disable_auto_convert}

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `preserveSpace`<sup>Optional</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#preserve_space StageExternalS3Compatible#preserve_space}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_outer_element StageExternalS3Compatible#strip_outer_element}

---

### StageExternalS3CompatibleShowOutput <a name="StageExternalS3CompatibleShowOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleShowOutput: stageExternalS3Compatible.StageExternalS3CompatibleShowOutput = { ... }
```


### StageExternalS3CompatibleTimeouts <a name="StageExternalS3CompatibleTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

const stageExternalS3CompatibleTimeouts: stageExternalS3Compatible.StageExternalS3CompatibleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalS3CompatibleCredentialsOutputReference <a name="StageExternalS3CompatibleCredentialsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput">awsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput">awsSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId">awsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey">awsSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsKeyIdInput`<sup>Optional</sup> <a name="awsKeyIdInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput"></a>

```typescript
public readonly awsKeyIdInput: string;
```

- *Type:* string

---

##### `awsSecretKeyInput`<sup>Optional</sup> <a name="awsSecretKeyInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput"></a>

```typescript
public readonly awsSecretKeyInput: string;
```

- *Type:* string

---

##### `awsKeyId`<sup>Required</sup> <a name="awsKeyId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId"></a>

```typescript
public readonly awsKeyId: string;
```

- *Type:* string

---

##### `awsSecretKey`<sup>Required</sup> <a name="awsSecretKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey"></a>

```typescript
public readonly awsSecretKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableList <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputDirectoryTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroList <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvList <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parseHeader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validateUtf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validateUtf8`<sup>Required</sup> <a name="validateUtf8" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```typescript
public readonly validateUtf8: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonList <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enableOctal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatList <a name="StageExternalS3CompatibleDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcList <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName">formatName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: StageExternalS3CompatibleDescribeOutputFileFormatAvroList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: StageExternalS3CompatibleDescribeOutputFileFormatCsvList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a>

---

##### `formatName`<sup>Required</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: StageExternalS3CompatibleDescribeOutputFileFormatJsonList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc"></a>

```typescript
public readonly orc: StageExternalS3CompatibleDescribeOutputFileFormatOrcList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: StageExternalS3CompatibleDescribeOutputFileFormatParquetList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml"></a>

```typescript
public readonly xml: StageExternalS3CompatibleDescribeOutputFileFormatXmlList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetList <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlList <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a>

---


### StageExternalS3CompatibleDescribeOutputList <a name="StageExternalS3CompatibleDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputLocationList <a name="StageExternalS3CompatibleDescribeOutputLocationList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleDescribeOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleDescribeOutputLocationOutputReference <a name="StageExternalS3CompatibleDescribeOutputLocationOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url">url</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url"></a>

```typescript
public readonly url: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutputLocation;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a>

---


### StageExternalS3CompatibleDescribeOutputOutputReference <a name="StageExternalS3CompatibleDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable">directoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryTable`<sup>Required</sup> <a name="directoryTable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable"></a>

```typescript
public readonly directoryTable: StageExternalS3CompatibleDescribeOutputDirectoryTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalS3CompatibleDescribeOutputFileFormatList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location"></a>

```typescript
public readonly location: StageExternalS3CompatibleDescribeOutputLocationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a>

---


### StageExternalS3CompatibleDirectoryOutputReference <a name="StageExternalS3CompatibleDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate">resetRefreshOnCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh"></a>

```typescript
public resetAutoRefresh(): void
```

##### `resetRefreshOnCreate` <a name="resetRefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate"></a>

```typescript
public resetRefreshOnCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput">autoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput">refreshOnCreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate">refreshOnCreate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput"></a>

```typescript
public readonly autoRefreshInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refreshOnCreateInput`<sup>Optional</sup> <a name="refreshOnCreateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput"></a>

```typescript
public readonly refreshOnCreateInput: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refreshOnCreate`<sup>Required</sup> <a name="refreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate"></a>

```typescript
public readonly refreshOnCreate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---


### StageExternalS3CompatibleFileFormatAvroOutputReference <a name="StageExternalS3CompatibleFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---


### StageExternalS3CompatibleFileFormatCsvOutputReference <a name="StageExternalS3CompatibleFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull">resetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">resetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape">resetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField">resetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">resetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader">resetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines">resetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader">resetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEmptyFieldAsNull` <a name="resetEmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```typescript
public resetEmptyFieldAsNull(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetErrorOnColumnCountMismatch` <a name="resetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```typescript
public resetErrorOnColumnCountMismatch(): void
```

##### `resetEscape` <a name="resetEscape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape"></a>

```typescript
public resetEscape(): void
```

##### `resetEscapeUnenclosedField` <a name="resetEscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```typescript
public resetEscapeUnenclosedField(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFieldOptionallyEnclosedBy` <a name="resetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```typescript
public resetFieldOptionallyEnclosedBy(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetParseHeader` <a name="resetParseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader"></a>

```typescript
public resetParseHeader(): void
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipBlankLines` <a name="resetSkipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```typescript
public resetSkipBlankLines(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetSkipHeader` <a name="resetSkipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader"></a>

```typescript
public resetSkipHeader(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput">emptyFieldAsNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">errorOnColumnCountMismatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput">escapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">escapeUnenclosedFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">fieldOptionallyEnclosedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput">parseHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput">skipBlankLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput">skipHeaderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine">multiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader">parseHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `emptyFieldAsNullInput`<sup>Optional</sup> <a name="emptyFieldAsNullInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```typescript
public readonly emptyFieldAsNullInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="errorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```typescript
public readonly errorOnColumnCountMismatchInput: string;
```

- *Type:* string

---

##### `escapeInput`<sup>Optional</sup> <a name="escapeInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput"></a>

```typescript
public readonly escapeInput: string;
```

- *Type:* string

---

##### `escapeUnenclosedFieldInput`<sup>Optional</sup> <a name="escapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```typescript
public readonly escapeUnenclosedFieldInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="fieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```typescript
public readonly fieldOptionallyEnclosedByInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `parseHeaderInput`<sup>Optional</sup> <a name="parseHeaderInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```typescript
public readonly parseHeaderInput: string;
```

- *Type:* string

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```typescript
public readonly recordDelimiterInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipBlankLinesInput`<sup>Optional</sup> <a name="skipBlankLinesInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```typescript
public readonly skipBlankLinesInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `skipHeaderInput`<sup>Optional</sup> <a name="skipHeaderInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```typescript
public readonly skipHeaderInput: number;
```

- *Type:* number

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: string;
```

- *Type:* string

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: string;
```

- *Type:* string

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---


### StageExternalS3CompatibleFileFormatJsonOutputReference <a name="StageExternalS3CompatibleFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate">resetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal">resetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues">resetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray">resetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowDuplicate` <a name="resetAllowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```typescript
public resetAllowDuplicate(): void
```

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEnableOctal` <a name="resetEnableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal"></a>

```typescript
public resetEnableOctal(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetStripNullValues` <a name="resetStripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues"></a>

```typescript
public resetStripNullValues(): void
```

##### `resetStripOuterArray` <a name="resetStripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray"></a>

```typescript
public resetStripOuterArray(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput">allowDuplicateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput">enableOctalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput">stripNullValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput">stripOuterArrayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal">enableOctal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine">multiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="allowDuplicateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```typescript
public readonly allowDuplicateInput: string;
```

- *Type:* string

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `enableOctalInput`<sup>Optional</sup> <a name="enableOctalInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput"></a>

```typescript
public readonly enableOctalInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="stripNullValuesInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```typescript
public readonly stripNullValuesInput: string;
```

- *Type:* string

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="stripOuterArrayInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```typescript
public readonly stripOuterArrayInput: string;
```

- *Type:* string

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---


### StageExternalS3CompatibleFileFormatOrcOutputReference <a name="StageExternalS3CompatibleFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---


### StageExternalS3CompatibleFileFormatOutputReference <a name="StageExternalS3CompatibleFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro">putAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc">putOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet">putParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml">putXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro">resetAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName">resetFormatName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc">resetOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet">resetParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml">resetXml</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvro` <a name="putAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro"></a>

```typescript
public putAvro(value: StageExternalS3CompatibleFileFormatAvro): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---

##### `putCsv` <a name="putCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv"></a>

```typescript
public putCsv(value: StageExternalS3CompatibleFileFormatCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson"></a>

```typescript
public putJson(value: StageExternalS3CompatibleFileFormatJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---

##### `putOrc` <a name="putOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc"></a>

```typescript
public putOrc(value: StageExternalS3CompatibleFileFormatOrc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---

##### `putParquet` <a name="putParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet"></a>

```typescript
public putParquet(value: StageExternalS3CompatibleFileFormatParquet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---

##### `putXml` <a name="putXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml"></a>

```typescript
public putXml(value: StageExternalS3CompatibleFileFormatXml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---

##### `resetAvro` <a name="resetAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro"></a>

```typescript
public resetAvro(): void
```

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetFormatName` <a name="resetFormatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName"></a>

```typescript
public resetFormatName(): void
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetOrc` <a name="resetOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc"></a>

```typescript
public resetOrc(): void
```

##### `resetParquet` <a name="resetParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet"></a>

```typescript
public resetParquet(): void
```

##### `resetXml` <a name="resetXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml"></a>

```typescript
public resetXml(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput">avroInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput">csvInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput">formatNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput">orcInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput">parquetInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput">xmlInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName">formatName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: StageExternalS3CompatibleFileFormatAvroOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: StageExternalS3CompatibleFileFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: StageExternalS3CompatibleFileFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc"></a>

```typescript
public readonly orc: StageExternalS3CompatibleFileFormatOrcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: StageExternalS3CompatibleFileFormatParquetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml"></a>

```typescript
public readonly xml: StageExternalS3CompatibleFileFormatXmlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a>

---

##### `avroInput`<sup>Optional</sup> <a name="avroInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput"></a>

```typescript
public readonly avroInput: StageExternalS3CompatibleFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: StageExternalS3CompatibleFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---

##### `formatNameInput`<sup>Optional</sup> <a name="formatNameInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput"></a>

```typescript
public readonly formatNameInput: string;
```

- *Type:* string

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: StageExternalS3CompatibleFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---

##### `orcInput`<sup>Optional</sup> <a name="orcInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput"></a>

```typescript
public readonly orcInput: StageExternalS3CompatibleFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---

##### `parquetInput`<sup>Optional</sup> <a name="parquetInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput"></a>

```typescript
public readonly parquetInput: StageExternalS3CompatibleFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---

##### `xmlInput`<sup>Optional</sup> <a name="xmlInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput"></a>

```typescript
public readonly xmlInput: StageExternalS3CompatibleFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---

##### `formatName`<sup>Required</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---


### StageExternalS3CompatibleFileFormatParquetOutputReference <a name="StageExternalS3CompatibleFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText">resetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType">resetUseLogicalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner">resetUseVectorizedScanner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryAsText` <a name="resetBinaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText"></a>

```typescript
public resetBinaryAsText(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```

##### `resetUseLogicalType` <a name="resetUseLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType"></a>

```typescript
public resetUseLogicalType(): void
```

##### `resetUseVectorizedScanner` <a name="resetUseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```typescript
public resetUseVectorizedScanner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput">binaryAsTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput">useLogicalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput">useVectorizedScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAsTextInput`<sup>Optional</sup> <a name="binaryAsTextInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```typescript
public readonly binaryAsTextInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `useLogicalTypeInput`<sup>Optional</sup> <a name="useLogicalTypeInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```typescript
public readonly useLogicalTypeInput: string;
```

- *Type:* string

---

##### `useVectorizedScannerInput`<sup>Optional</sup> <a name="useVectorizedScannerInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```typescript
public readonly useVectorizedScannerInput: string;
```

- *Type:* string

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: string;
```

- *Type:* string

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---


### StageExternalS3CompatibleFileFormatXmlOutputReference <a name="StageExternalS3CompatibleFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert">resetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace">resetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement">resetStripOuterElement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDisableAutoConvert` <a name="resetDisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```typescript
public resetDisableAutoConvert(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetPreserveSpace` <a name="resetPreserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace"></a>

```typescript
public resetPreserveSpace(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetStripOuterElement` <a name="resetStripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement"></a>

```typescript
public resetStripOuterElement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput">disableAutoConvertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput">preserveSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput">stripOuterElementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `disableAutoConvertInput`<sup>Optional</sup> <a name="disableAutoConvertInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```typescript
public readonly disableAutoConvertInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: string;
```

- *Type:* string

---

##### `preserveSpaceInput`<sup>Optional</sup> <a name="preserveSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```typescript
public readonly preserveSpaceInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `stripOuterElementInput`<sup>Optional</sup> <a name="stripOuterElementInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```typescript
public readonly stripOuterElementInput: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---


### StageExternalS3CompatibleShowOutputList <a name="StageExternalS3CompatibleShowOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get"></a>

```typescript
public get(index: number): StageExternalS3CompatibleShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalS3CompatibleShowOutputOutputReference <a name="StageExternalS3CompatibleShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled">directoryEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials">hasCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey">hasEncryptionKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `directoryEnabled`<sup>Required</sup> <a name="directoryEnabled" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled"></a>

```typescript
public readonly directoryEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `hasCredentials`<sup>Required</sup> <a name="hasCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials"></a>

```typescript
public readonly hasCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hasEncryptionKey`<sup>Required</sup> <a name="hasEncryptionKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey"></a>

```typescript
public readonly hasEncryptionKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalS3CompatibleShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a>

---


### StageExternalS3CompatibleTimeoutsOutputReference <a name="StageExternalS3CompatibleTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer"></a>

```typescript
import { stageExternalS3Compatible } from '@cdktn/provider-snowflake'

new stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StageExternalS3CompatibleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---



