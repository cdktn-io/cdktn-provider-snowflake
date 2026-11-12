# `postgresMirror` Submodule <a name="`postgresMirror` Submodule" id="@cdktn/provider-snowflake.postgresMirror"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresMirror <a name="PostgresMirror" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

new postgresMirror.PostgresMirror(scope: Construct, id: string, config: PostgresMirrorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig">PostgresMirrorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig">PostgresMirrorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval">putRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy">resetDropTargetDatabaseOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas">resetPostgresSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables">resetPostgresTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType">resetTargetTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse">resetWarehouse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRefreshInterval` <a name="putRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval"></a>

```typescript
public putRefreshInterval(value: PostgresMirrorRefreshInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresMirrorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `resetDropTargetDatabaseOnDestroy` <a name="resetDropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy"></a>

```typescript
public resetDropTargetDatabaseOnDestroy(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPostgresSchemas` <a name="resetPostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas"></a>

```typescript
public resetPostgresSchemas(): void
```

##### `resetPostgresTables` <a name="resetPostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables"></a>

```typescript
public resetPostgresTables(): void
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval"></a>

```typescript
public resetRefreshInterval(): void
```

##### `resetTargetTableType` <a name="resetTargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType"></a>

```typescript
public resetTargetTableType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse"></a>

```typescript
public resetWarehouse(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

postgresMirror.PostgresMirror.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

postgresMirror.PostgresMirror.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

postgresMirror.PostgresMirror.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

postgresMirror.PostgresMirror.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresMirror to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresMirror that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresMirror to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval">refreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput">dropTargetDatabaseOnDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput">postgresInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput">postgresSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput">postgresTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput">targetTableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy">dropTargetDatabaseOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas">postgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables">postgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase">targetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType">targetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput"></a>

```typescript
public readonly describeOutput: PostgresMirrorDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: PostgresMirrorRefreshIntervalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresMirrorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a>

---

##### `dropTargetDatabaseOnDestroyInput`<sup>Optional</sup> <a name="dropTargetDatabaseOnDestroyInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput"></a>

```typescript
public readonly dropTargetDatabaseOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput"></a>

```typescript
public readonly postgresDatabaseInput: string;
```

- *Type:* string

---

##### `postgresInstanceInput`<sup>Optional</sup> <a name="postgresInstanceInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput"></a>

```typescript
public readonly postgresInstanceInput: string;
```

- *Type:* string

---

##### `postgresSchemasInput`<sup>Optional</sup> <a name="postgresSchemasInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput"></a>

```typescript
public readonly postgresSchemasInput: string[];
```

- *Type:* string[]

---

##### `postgresTablesInput`<sup>Optional</sup> <a name="postgresTablesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput"></a>

```typescript
public readonly postgresTablesInput: string[];
```

- *Type:* string[]

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput"></a>

```typescript
public readonly refreshIntervalInput: PostgresMirrorRefreshInterval;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput"></a>

```typescript
public readonly targetDatabaseInput: string;
```

- *Type:* string

---

##### `targetTableTypeInput`<sup>Optional</sup> <a name="targetTableTypeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput"></a>

```typescript
public readonly targetTableTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresMirrorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `dropTargetDatabaseOnDestroy`<sup>Required</sup> <a name="dropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy"></a>

```typescript
public readonly dropTargetDatabaseOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas"></a>

```typescript
public readonly postgresSchemas: string[];
```

- *Type:* string[]

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables"></a>

```typescript
public readonly postgresTables: string[];
```

- *Type:* string[]

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: string;
```

- *Type:* string

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType"></a>

```typescript
public readonly targetTableType: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresMirrorConfig <a name="PostgresMirrorConfig" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

const postgresMirrorConfig: postgresMirror.PostgresMirrorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase">targetDatabase</a></code> | <code>string</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy">dropTargetDatabaseOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas">postgresSchemas</a></code> | <code>string[]</code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables">postgresTables</a></code> | <code>string[]</code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval">refreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType">targetTableType</a></code> | <code>string</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse">warehouse</a></code> | <code>string</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: string;
```

- *Type:* string

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `dropTargetDatabaseOnDestroy`<sup>Optional</sup> <a name="dropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy"></a>

```typescript
public readonly dropTargetDatabaseOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgresSchemas`<sup>Optional</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas"></a>

```typescript
public readonly postgresSchemas: string[];
```

- *Type:* string[]

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `postgresTables`<sup>Optional</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables"></a>

```typescript
public readonly postgresTables: string[];
```

- *Type:* string[]

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: PostgresMirrorRefreshInterval;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `targetTableType`<sup>Optional</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType"></a>

```typescript
public readonly targetTableType: string;
```

- *Type:* string

Specifies the format of the target tables.

When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresMirrorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

### PostgresMirrorDescribeOutput <a name="PostgresMirrorDescribeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

const postgresMirrorDescribeOutput: postgresMirror.PostgresMirrorDescribeOutput = { ... }
```


### PostgresMirrorRefreshInterval <a name="PostgresMirrorRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

const postgresMirrorRefreshInterval: postgresMirror.PostgresMirrorRefreshInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours">hours</a></code> | <code>number</code> | Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes">minutes</a></code> | <code>number</code> | Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds">seconds</a></code> | <code>number</code> | Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`). |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}

---

### PostgresMirrorTimeouts <a name="PostgresMirrorTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

const postgresMirrorTimeouts: postgresMirror.PostgresMirrorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresMirrorDescribeOutputList <a name="PostgresMirrorDescribeOutputList" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

new postgresMirror.PostgresMirrorDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get"></a>

```typescript
public get(index: number): PostgresMirrorDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PostgresMirrorDescribeOutputOutputReference <a name="PostgresMirrorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

new postgresMirror.PostgresMirrorDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes">applyLagBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations">applyLagOperations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds">applyLagSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName">catalogIntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly">feedOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn">lastAppliedCommitLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime">lastAppliedCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime">lastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId">lastOperationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime">lastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance">postgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas">postgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus">postgresStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables">postgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations">recentQueryDurations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType">targetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyLagBytes`<sup>Required</sup> <a name="applyLagBytes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes"></a>

```typescript
public readonly applyLagBytes: number;
```

- *Type:* number

---

##### `applyLagOperations`<sup>Required</sup> <a name="applyLagOperations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations"></a>

```typescript
public readonly applyLagOperations: number;
```

- *Type:* number

---

##### `applyLagSeconds`<sup>Required</sup> <a name="applyLagSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds"></a>

```typescript
public readonly applyLagSeconds: number;
```

- *Type:* number

---

##### `catalogIntegrationName`<sup>Required</sup> <a name="catalogIntegrationName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```typescript
public readonly catalogIntegrationName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `feedOnly`<sup>Required</sup> <a name="feedOnly" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly"></a>

```typescript
public readonly feedOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastAppliedCommitLsn`<sup>Required</sup> <a name="lastAppliedCommitLsn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```typescript
public readonly lastAppliedCommitLsn: string;
```

- *Type:* string

---

##### `lastAppliedCommitTime`<sup>Required</sup> <a name="lastAppliedCommitTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```typescript
public readonly lastAppliedCommitTime: string;
```

- *Type:* string

---

##### `lastApplyTime`<sup>Required</sup> <a name="lastApplyTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime"></a>

```typescript
public readonly lastApplyTime: string;
```

- *Type:* string

---

##### `lastOperationId`<sup>Required</sup> <a name="lastOperationId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId"></a>

```typescript
public readonly lastOperationId: number;
```

- *Type:* number

---

##### `lastOperationTime`<sup>Required</sup> <a name="lastOperationTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime"></a>

```typescript
public readonly lastOperationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `postgresInstance`<sup>Required</sup> <a name="postgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance"></a>

```typescript
public readonly postgresInstance: string;
```

- *Type:* string

---

##### `postgresSchemas`<sup>Required</sup> <a name="postgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas"></a>

```typescript
public readonly postgresSchemas: string[];
```

- *Type:* string[]

---

##### `postgresStatus`<sup>Required</sup> <a name="postgresStatus" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus"></a>

```typescript
public readonly postgresStatus: string;
```

- *Type:* string

---

##### `postgresTables`<sup>Required</sup> <a name="postgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables"></a>

```typescript
public readonly postgresTables: string[];
```

- *Type:* string[]

---

##### `recentQueryDurations`<sup>Required</sup> <a name="recentQueryDurations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations"></a>

```typescript
public readonly recentQueryDurations: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: string;
```

- *Type:* string

---

##### `targetTableType`<sup>Required</sup> <a name="targetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType"></a>

```typescript
public readonly targetTableType: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresMirrorDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a>

---


### PostgresMirrorRefreshIntervalOutputReference <a name="PostgresMirrorRefreshIntervalOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

new postgresMirror.PostgresMirrorRefreshIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresMirrorRefreshInterval;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---


### PostgresMirrorTimeoutsOutputReference <a name="PostgresMirrorTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresMirror } from '@cdktn/provider-snowflake'

new postgresMirror.PostgresMirrorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresMirrorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---



