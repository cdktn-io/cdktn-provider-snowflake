# `fileFormatJson` Submodule <a name="`fileFormatJson` Submodule" id="@cdktn/provider-snowflake.fileFormatJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatJson <a name="FileFormatJson" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json snowflake_file_format_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJson(scope: Construct, id: string, config: FileFormatJsonConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig">FileFormatJsonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig">FileFormatJsonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate">resetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal">resetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine">resetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues">resetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray">resetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts"></a>

```typescript
public putTimeouts(value: FileFormatJsonTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `resetAllowDuplicate` <a name="resetAllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate"></a>

```typescript
public resetAllowDuplicate(): void
```

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEnableOctal` <a name="resetEnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal"></a>

```typescript
public resetEnableOctal(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetStripNullValues` <a name="resetStripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues"></a>

```typescript
public resetStripNullValues(): void
```

##### `resetStripOuterArray` <a name="resetStripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray"></a>

```typescript
public resetStripOuterArray(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

fileFormatJson.FileFormatJson.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

fileFormatJson.FileFormatJson.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

fileFormatJson.FileFormatJson.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

fileFormatJson.FileFormatJson.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileFormatJson to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileFormatJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput">allowDuplicateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput">enableOctalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput">multiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput">stripNullValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput">stripOuterArrayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal">enableOctal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine">multiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput"></a>

```typescript
public readonly describeOutput: FileFormatJsonDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput"></a>

```typescript
public readonly showOutput: FileFormatJsonShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts"></a>

```typescript
public readonly timeouts: FileFormatJsonTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="allowDuplicateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput"></a>

```typescript
public readonly allowDuplicateInput: string;
```

- *Type:* string

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `enableOctalInput`<sup>Optional</sup> <a name="enableOctalInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput"></a>

```typescript
public readonly enableOctalInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="stripNullValuesInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput"></a>

```typescript
public readonly stripNullValuesInput: string;
```

- *Type:* string

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="stripOuterArrayInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput"></a>

```typescript
public readonly stripOuterArrayInput: string;
```

- *Type:* string

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FileFormatJsonTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatJsonConfig <a name="FileFormatJsonConfig" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

const fileFormatJsonConfig: fileFormatJson.FileFormatJsonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal">enableOctal</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#id FileFormatJson#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine">multiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#database FileFormatJson#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#name FileFormatJson#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#schema FileFormatJson#schema}

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#comment FileFormatJson#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#compression FileFormatJson#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#id FileFormatJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FileFormatJsonTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}

---

### FileFormatJsonDescribeOutput <a name="FileFormatJsonDescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

const fileFormatJsonDescribeOutput: fileFormatJson.FileFormatJsonDescribeOutput = { ... }
```


### FileFormatJsonShowOutput <a name="FileFormatJsonShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

const fileFormatJsonShowOutput: fileFormatJson.FileFormatJsonShowOutput = { ... }
```


### FileFormatJsonTimeouts <a name="FileFormatJsonTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

const fileFormatJsonTimeouts: fileFormatJson.FileFormatJsonTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#create FileFormatJson#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#delete FileFormatJson#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#read FileFormatJson#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#update FileFormatJson#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#create FileFormatJson#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#delete FileFormatJson#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#read FileFormatJson#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#update FileFormatJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatJsonDescribeOutputList <a name="FileFormatJsonDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJsonDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get"></a>

```typescript
public get(index: number): FileFormatJsonDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FileFormatJsonDescribeOutputOutputReference <a name="FileFormatJsonDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJsonDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal">enableOctal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FileFormatJsonDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a>

---


### FileFormatJsonShowOutputList <a name="FileFormatJsonShowOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJsonShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get"></a>

```typescript
public get(index: number): FileFormatJsonShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FileFormatJsonShowOutputOutputReference <a name="FileFormatJsonShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJsonShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions">formatOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FileFormatJsonShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a>

---


### FileFormatJsonTimeoutsOutputReference <a name="FileFormatJsonTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer"></a>

```typescript
import { fileFormatJson } from '@cdktn/provider-snowflake'

new fileFormatJson.FileFormatJsonTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileFormatJsonTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---



