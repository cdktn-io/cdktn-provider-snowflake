# `icebergTableFromDeltaFiles` Submodule <a name="`icebergTableFromDeltaFiles` Submodule" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromDeltaFiles <a name="IcebergTableFromDeltaFiles" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files snowflake_iceberg_table_from_delta_files}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles(scope: Construct, id: string, config: IcebergTableFromDeltaFilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig">IcebergTableFromDeltaFilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig">IcebergTableFromDeltaFilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts"></a>

```typescript
public putTimeouts(value: IcebergTableFromDeltaFilesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh"></a>

```typescript
public resetAutoRefresh(): void
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IcebergTableFromDeltaFiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IcebergTableFromDeltaFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromDeltaFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput">autoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput">baseLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation">baseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput"></a>

```typescript
public readonly describeOutput: IcebergTableFromDeltaFilesDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters"></a>

```typescript
public readonly parameters: IcebergTableFromDeltaFilesParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput"></a>

```typescript
public readonly showOutput: IcebergTableFromDeltaFilesShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts"></a>

```typescript
public readonly timeouts: IcebergTableFromDeltaFilesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a>

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput"></a>

```typescript
public readonly autoRefreshInput: string;
```

- *Type:* string

---

##### `baseLocationInput`<sup>Optional</sup> <a name="baseLocationInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput"></a>

```typescript
public readonly baseLocationInput: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IcebergTableFromDeltaFilesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromDeltaFilesConfig <a name="IcebergTableFromDeltaFilesConfig" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesConfig: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation">baseLocation</a></code> | <code>string</code> | Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog">catalog</a></code> | <code>string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#base_location IcebergTableFromDeltaFiles#base_location}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#database IcebergTableFromDeltaFiles#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#name IcebergTableFromDeltaFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#schema IcebergTableFromDeltaFiles#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#auto_refresh IcebergTableFromDeltaFiles#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#catalog IcebergTableFromDeltaFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#comment IcebergTableFromDeltaFiles#comment}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#external_volume IcebergTableFromDeltaFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#replace_invalid_characters IcebergTableFromDeltaFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IcebergTableFromDeltaFilesTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#timeouts IcebergTableFromDeltaFiles#timeouts}

---

### IcebergTableFromDeltaFilesDescribeOutput <a name="IcebergTableFromDeltaFilesDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesDescribeOutput: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput = { ... }
```


### IcebergTableFromDeltaFilesParameters <a name="IcebergTableFromDeltaFilesParameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesParameters: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters = { ... }
```


### IcebergTableFromDeltaFilesParametersCatalog <a name="IcebergTableFromDeltaFilesParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesParametersCatalog: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog = { ... }
```


### IcebergTableFromDeltaFilesParametersExternalVolume <a name="IcebergTableFromDeltaFilesParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesParametersExternalVolume: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume = { ... }
```


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesParametersReplaceInvalidCharacters: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters = { ... }
```


### IcebergTableFromDeltaFilesShowOutput <a name="IcebergTableFromDeltaFilesShowOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesShowOutput: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput = { ... }
```


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesShowOutputAutoRefreshStatus: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus = { ... }
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecs <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesShowOutputPartitionSpecs: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs = { ... }
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesShowOutputPartitionSpecsFields: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields = { ... }
```


### IcebergTableFromDeltaFilesTimeouts <a name="IcebergTableFromDeltaFilesTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

const icebergTableFromDeltaFilesTimeouts: icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromDeltaFilesDescribeOutputList <a name="IcebergTableFromDeltaFilesDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesDescribeOutputOutputReference <a name="IcebergTableFromDeltaFilesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable"></a>

```typescript
public readonly isNullable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain"></a>

```typescript
public readonly privacyDomain: string;
```

- *Type:* string

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```typescript
public readonly sourceIcebergType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault"></a>

```typescript
public readonly writeDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a>

---


### IcebergTableFromDeltaFilesParametersCatalogList <a name="IcebergTableFromDeltaFilesParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesParametersCatalogOutputReference <a name="IcebergTableFromDeltaFilesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesParametersCatalog;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a>

---


### IcebergTableFromDeltaFilesParametersExternalVolumeList <a name="IcebergTableFromDeltaFilesParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference <a name="IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesParametersExternalVolume;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a>

---


### IcebergTableFromDeltaFilesParametersList <a name="IcebergTableFromDeltaFilesParametersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesParametersOutputReference <a name="IcebergTableFromDeltaFilesParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog"></a>

```typescript
public readonly catalog: IcebergTableFromDeltaFilesParametersCatalogList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume"></a>

```typescript
public readonly externalVolume: IcebergTableFromDeltaFilesParametersExternalVolumeList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a>

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```typescript
public readonly currentSnapshotId: number;
```

- *Type:* number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```typescript
public readonly executionState: string;
```

- *Type:* string

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```typescript
public readonly lastSnapshotTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```typescript
public readonly pendingSnapshotCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromDeltaFilesShowOutputList <a name="IcebergTableFromDeltaFilesShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesShowOutputOutputReference <a name="IcebergTableFromDeltaFilesShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus"></a>

```typescript
public readonly autoRefreshStatus: IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata"></a>

```typescript
public readonly canWriteMetadata: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName"></a>

```typescript
public readonly catalogSyncName: string;
```

- *Type:* string

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName"></a>

```typescript
public readonly catalogTableName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```typescript
public readonly currentPartitionSpecId: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName"></a>

```typescript
public readonly externalVolumeName: string;
```

- *Type:* string

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```typescript
public readonly icebergTableFormatVersion: number;
```

- *Type:* number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType"></a>

```typescript
public readonly icebergTableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs"></a>

```typescript
public readonly partitionSpecs: IcebergTableFromDeltaFilesShowOutputPartitionSpecsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get"></a>

```typescript
public get(index: number): IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```typescript
public readonly fields: IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableFromDeltaFilesShowOutputPartitionSpecs;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a>

---


### IcebergTableFromDeltaFilesTimeoutsOutputReference <a name="IcebergTableFromDeltaFilesTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer"></a>

```typescript
import { icebergTableFromDeltaFiles } from '@cdktn/provider-snowflake'

new icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableFromDeltaFilesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---



