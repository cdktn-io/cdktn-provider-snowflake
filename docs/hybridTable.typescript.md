# `hybridTable` Submodule <a name="`hybridTable` Submodule" id="@cdktn/provider-snowflake.hybridTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HybridTable <a name="HybridTable" id="@cdktn/provider-snowflake.hybridTable.HybridTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table snowflake_hybrid_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTable(scope: Construct, id: string, config: HybridTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig">HybridTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig">HybridTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint">putForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex">putIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint">putPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint">putUniqueConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint">resetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint">resetUniqueConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumn` <a name="putColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn"></a>

```typescript
public putColumn(value: IResolvable | HybridTableColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---

##### `putForeignKeyConstraint` <a name="putForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint"></a>

```typescript
public putForeignKeyConstraint(value: IResolvable | HybridTableForeignKeyConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---

##### `putIndex` <a name="putIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex"></a>

```typescript
public putIndex(value: IResolvable | HybridTableIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---

##### `putPrimaryKeyConstraint` <a name="putPrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint"></a>

```typescript
public putPrimaryKeyConstraint(value: HybridTablePrimaryKeyConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts"></a>

```typescript
public putTimeouts(value: HybridTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `putUniqueConstraint` <a name="putUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint"></a>

```typescript
public putUniqueConstraint(value: IResolvable | HybridTableUniqueConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetForeignKeyConstraint` <a name="resetForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint"></a>

```typescript
public resetForeignKeyConstraint(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndex` <a name="resetIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex"></a>

```typescript
public resetIndex(): void
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays"></a>

```typescript
public resetMaxDataExtensionTimeInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUniqueConstraint` <a name="resetUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint"></a>

```typescript
public resetUniqueConstraint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

hybridTable.HybridTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

hybridTable.HybridTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

hybridTable.HybridTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

hybridTable.HybridTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HybridTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HybridTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HybridTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.column">column</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.index">index</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput">showKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint">uniqueConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput">columnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput">foreignKeyConstraintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput">indexInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput">primaryKeyConstraintInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput">uniqueConstraintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.column"></a>

```typescript
public readonly column: HybridTableColumnList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput"></a>

```typescript
public readonly describeOutput: HybridTableDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a>

---

##### `foreignKeyConstraint`<sup>Required</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: HybridTableForeignKeyConstraintList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.index"></a>

```typescript
public readonly index: HybridTableIndexList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a>

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: HybridTablePrimaryKeyConstraintOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a>

---

##### `showKeysOutput`<sup>Required</sup> <a name="showKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput"></a>

```typescript
public readonly showKeysOutput: HybridTableShowKeysOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput"></a>

```typescript
public readonly showOutput: HybridTableShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts"></a>

```typescript
public readonly timeouts: HybridTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a>

---

##### `uniqueConstraint`<sup>Required</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint"></a>

```typescript
public readonly uniqueConstraint: HybridTableUniqueConstraintList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | HybridTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `foreignKeyConstraintInput`<sup>Optional</sup> <a name="foreignKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput"></a>

```typescript
public readonly foreignKeyConstraintInput: IResolvable | HybridTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput"></a>

```typescript
public readonly indexInput: IResolvable | HybridTableIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput"></a>

```typescript
public readonly maxDataExtensionTimeInDaysInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryKeyConstraintInput`<sup>Optional</sup> <a name="primaryKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput"></a>

```typescript
public readonly primaryKeyConstraintInput: HybridTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HybridTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `uniqueConstraintInput`<sup>Optional</sup> <a name="uniqueConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput"></a>

```typescript
public readonly uniqueConstraintInput: IResolvable | HybridTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HybridTableColumn <a name="HybridTableColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableColumn: hybridTable.HybridTableColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name">name</a></code> | <code>string</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type">type</a></code> | <code>string</code> | Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate">collate</a></code> | <code>string</code> | Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment">comment</a></code> | <code>string</code> | Column-level comment. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull">notNull</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to restrict the column to NOT NULL values. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#type HybridTable#type}

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#collate HybridTable#collate}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Column-level comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default"></a>

```typescript
public readonly default: HybridTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#default HybridTable#default}

---

##### `notNull`<sup>Optional</sup> <a name="notNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull"></a>

```typescript
public readonly notNull: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to restrict the column to NOT NULL values.

Changing this on an existing column forces recreation. Primary key columns must set this to true because NOT NULL is implied by the primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#not_null HybridTable#not_null}

---

### HybridTableColumnDefault <a name="HybridTableColumnDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableColumnDefault: hybridTable.HybridTableColumnDefault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant">constant</a></code> | <code>string</code> | A constant default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression">expression</a></code> | <code>string</code> | A SQL expression default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence">sequence</a></code> | <code>string</code> | The default sequence for the column (uses NEXTVAL). |

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

A constant default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#constant HybridTable#constant}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

A SQL expression default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#expression HybridTable#expression}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence"></a>

```typescript
public readonly sequence: string;
```

- *Type:* string

The default sequence for the column (uses NEXTVAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#sequence HybridTable#sequence}

---

### HybridTableConfig <a name="HybridTableConfig" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableConfig: hybridTable.HybridTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column">column</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index">index</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint">uniqueConstraint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | unique_constraint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column"></a>

```typescript
public readonly column: IResolvable | HybridTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: HybridTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: IResolvable | HybridTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index"></a>

```typescript
public readonly index: IResolvable | HybridTableIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HybridTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `uniqueConstraint`<sup>Optional</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint"></a>

```typescript
public readonly uniqueConstraint: IResolvable | HybridTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

### HybridTableDescribeOutput <a name="HybridTableDescribeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableDescribeOutput: hybridTable.HybridTableDescribeOutput = { ... }
```


### HybridTableForeignKeyConstraint <a name="HybridTableForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableForeignKeyConstraint: hybridTable.HybridTableForeignKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns">columns</a></code> | <code>string[]</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns">refColumns</a></code> | <code>string[]</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName">tableName</a></code> | <code>string</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `refColumns`<sup>Required</sup> <a name="refColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns"></a>

```typescript
public readonly refColumns: string[];
```

- *Type:* string[]

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#ref_columns HybridTable#ref_columns}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#table_name HybridTable#table_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableIndex <a name="HybridTableIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableIndex: hybridTable.HybridTableIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns">columns</a></code> | <code>string[]</code> | Index key columns, in order. Order is semantically meaningful. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name">name</a></code> | <code>string</code> | Name of the secondary index. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns">includeColumns</a></code> | <code>string[]</code> | Columns included in the index payload via INCLUDE (...). Order carries no meaning. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

Index key columns, in order. Order is semantically meaningful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secondary index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `includeColumns`<sup>Optional</sup> <a name="includeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns"></a>

```typescript
public readonly includeColumns: string[];
```

- *Type:* string[]

Columns included in the index payload via INCLUDE (...). Order carries no meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#include_columns HybridTable#include_columns}

---

### HybridTablePrimaryKeyConstraint <a name="HybridTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTablePrimaryKeyConstraint: hybridTable.HybridTablePrimaryKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns">columns</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableShowKeysOutput <a name="HybridTableShowKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableShowKeysOutput: hybridTable.HybridTableShowKeysOutput = { ... }
```


### HybridTableShowOutput <a name="HybridTableShowOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableShowOutput: hybridTable.HybridTableShowOutput = { ... }
```


### HybridTableTimeouts <a name="HybridTableTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableTimeouts: hybridTable.HybridTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}.

---

### HybridTableUniqueConstraint <a name="HybridTableUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

const hybridTableUniqueConstraint: hybridTable.HybridTableUniqueConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns">columns</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

## Classes <a name="Classes" id="Classes"></a>

### HybridTableColumnDefaultOutputReference <a name="HybridTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableColumnDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence">resetSequence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetSequence` <a name="resetSequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence"></a>

```typescript
public resetSequence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput">sequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence">sequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput"></a>

```typescript
public readonly sequenceInput: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence"></a>

```typescript
public readonly sequence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HybridTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---


### HybridTableColumnList <a name="HybridTableColumnList" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get"></a>

```typescript
public get(index: number): HybridTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---


### HybridTableColumnOutputReference <a name="HybridTableColumnOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault">putDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate">resetCollate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull">resetNotNull</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefault` <a name="putDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault"></a>

```typescript
public putDefault(value: HybridTableColumnDefault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `resetCollate` <a name="resetCollate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate"></a>

```typescript
public resetCollate(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetNotNull` <a name="resetNotNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull"></a>

```typescript
public resetNotNull(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput">collateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput">defaultInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput">notNullInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate">collate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull">notNull</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default"></a>

```typescript
public readonly default: HybridTableColumnDefaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a>

---

##### `collateInput`<sup>Optional</sup> <a name="collateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput"></a>

```typescript
public readonly collateInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: HybridTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notNullInput`<sup>Optional</sup> <a name="notNullInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput"></a>

```typescript
public readonly notNullInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `collate`<sup>Required</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notNull`<sup>Required</sup> <a name="notNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull"></a>

```typescript
public readonly notNull: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>

---


### HybridTableDescribeOutputList <a name="HybridTableDescribeOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get"></a>

```typescript
public get(index: number): HybridTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### HybridTableDescribeOutputOutputReference <a name="HybridTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord">schemaEvolutionRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable"></a>

```typescript
public readonly isNullable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain"></a>

```typescript
public readonly privacyDomain: string;
```

- *Type:* string

---

##### `schemaEvolutionRecord`<sup>Required</sup> <a name="schemaEvolutionRecord" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```typescript
public readonly schemaEvolutionRecord: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HybridTableDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a>

---


### HybridTableForeignKeyConstraintList <a name="HybridTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableForeignKeyConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get"></a>

```typescript
public get(index: number): HybridTableForeignKeyConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---


### HybridTableForeignKeyConstraintOutputReference <a name="HybridTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableForeignKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput">refColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns">refColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `refColumnsInput`<sup>Optional</sup> <a name="refColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput"></a>

```typescript
public readonly refColumnsInput: string[];
```

- *Type:* string[]

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `refColumns`<sup>Required</sup> <a name="refColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns"></a>

```typescript
public readonly refColumns: string[];
```

- *Type:* string[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableForeignKeyConstraint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>

---


### HybridTableIndexList <a name="HybridTableIndexList" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get"></a>

```typescript
public get(index: number): HybridTableIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---


### HybridTableIndexOutputReference <a name="HybridTableIndexOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns">resetIncludeColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeColumns` <a name="resetIncludeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns"></a>

```typescript
public resetIncludeColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput">includeColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns">includeColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `includeColumnsInput`<sup>Optional</sup> <a name="includeColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput"></a>

```typescript
public readonly includeColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `includeColumns`<sup>Required</sup> <a name="includeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns"></a>

```typescript
public readonly includeColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableIndex;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>

---


### HybridTablePrimaryKeyConstraintOutputReference <a name="HybridTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTablePrimaryKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HybridTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---


### HybridTableShowKeysOutputList <a name="HybridTableShowKeysOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableShowKeysOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get"></a>

```typescript
public get(index: number): HybridTableShowKeysOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### HybridTableShowKeysOutputOutputReference <a name="HybridTableShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableShowKeysOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns">referencedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable">referencedTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule">updateRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedColumns`<sup>Required</sup> <a name="referencedColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns"></a>

```typescript
public readonly referencedColumns: string[];
```

- *Type:* string[]

---

##### `referencedTable`<sup>Required</sup> <a name="referencedTable" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable"></a>

```typescript
public readonly referencedTable: string;
```

- *Type:* string

---

##### `updateRule`<sup>Required</sup> <a name="updateRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule"></a>

```typescript
public readonly updateRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HybridTableShowKeysOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a>

---


### HybridTableShowOutputList <a name="HybridTableShowOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get"></a>

```typescript
public get(index: number): HybridTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### HybridTableShowOutputOutputReference <a name="HybridTableShowOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes">bytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes"></a>

```typescript
public readonly bytes: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HybridTableShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a>

---


### HybridTableTimeoutsOutputReference <a name="HybridTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---


### HybridTableUniqueConstraintList <a name="HybridTableUniqueConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableUniqueConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get"></a>

```typescript
public get(index: number): HybridTableUniqueConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---


### HybridTableUniqueConstraintOutputReference <a name="HybridTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer"></a>

```typescript
import { hybridTable } from '@cdktn/provider-snowflake'

new hybridTable.HybridTableUniqueConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HybridTableUniqueConstraint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>

---



