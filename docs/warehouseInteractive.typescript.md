# `warehouseInteractive` Submodule <a name="`warehouseInteractive` Submodule" id="@cdktn/provider-snowflake.warehouseInteractive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseInteractive <a name="WarehouseInteractive" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive snowflake_warehouse_interactive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractive(scope: Construct, id: string, config: WarehouseInteractiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig">WarehouseInteractiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig">WarehouseInteractiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume">resetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend">resetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse">resetFallbackWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended">resetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount">resetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel">resetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount">resetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor">resetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize">resetWarehouseSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts"></a>

```typescript
public putTimeouts(value: WarehouseInteractiveTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `resetAutoResume` <a name="resetAutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume"></a>

```typescript
public resetAutoResume(): void
```

##### `resetAutoSuspend` <a name="resetAutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend"></a>

```typescript
public resetAutoSuspend(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetFallbackWarehouse` <a name="resetFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse"></a>

```typescript
public resetFallbackWarehouse(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitiallySuspended` <a name="resetInitiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended"></a>

```typescript
public resetInitiallySuspended(): void
```

##### `resetMaxClusterCount` <a name="resetMaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount"></a>

```typescript
public resetMaxClusterCount(): void
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel"></a>

```typescript
public resetMaxConcurrencyLevel(): void
```

##### `resetMinClusterCount` <a name="resetMinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount"></a>

```typescript
public resetMinClusterCount(): void
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor"></a>

```typescript
public resetResourceMonitor(): void
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds"></a>

```typescript
public resetStatementQueuedTimeoutInSeconds(): void
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds"></a>

```typescript
public resetStatementTimeoutInSeconds(): void
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables"></a>

```typescript
public resetTables(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWarehouseSize` <a name="resetWarehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize"></a>

```typescript
public resetWarehouseSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

warehouseInteractive.WarehouseInteractive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

warehouseInteractive.WarehouseInteractive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

warehouseInteractive.WarehouseInteractive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

warehouseInteractive.WarehouseInteractive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WarehouseInteractive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WarehouseInteractive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseInteractive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType">warehouseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput">autoResumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput">autoSuspendInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput">fallbackWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput">initiallySuspendedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput">maxClusterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput">minClusterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput">tablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput">warehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume">autoResume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend">autoSuspend</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended">initiallySuspended</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount">maxClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount">minClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables">tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize">warehouseSize</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters"></a>

```typescript
public readonly parameters: WarehouseInteractiveParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput"></a>

```typescript
public readonly showOutput: WarehouseInteractiveShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts"></a>

```typescript
public readonly timeouts: WarehouseInteractiveTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a>

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType"></a>

```typescript
public readonly warehouseType: string;
```

- *Type:* string

---

##### `autoResumeInput`<sup>Optional</sup> <a name="autoResumeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput"></a>

```typescript
public readonly autoResumeInput: string;
```

- *Type:* string

---

##### `autoSuspendInput`<sup>Optional</sup> <a name="autoSuspendInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput"></a>

```typescript
public readonly autoSuspendInput: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `fallbackWarehouseInput`<sup>Optional</sup> <a name="fallbackWarehouseInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput"></a>

```typescript
public readonly fallbackWarehouseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initiallySuspendedInput`<sup>Optional</sup> <a name="initiallySuspendedInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput"></a>

```typescript
public readonly initiallySuspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxClusterCountInput`<sup>Optional</sup> <a name="maxClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput"></a>

```typescript
public readonly maxClusterCountInput: number;
```

- *Type:* number

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput"></a>

```typescript
public readonly maxConcurrencyLevelInput: number;
```

- *Type:* number

---

##### `minClusterCountInput`<sup>Optional</sup> <a name="minClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput"></a>

```typescript
public readonly minClusterCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput"></a>

```typescript
public readonly resourceMonitorInput: string;
```

- *Type:* string

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput"></a>

```typescript
public readonly statementQueuedTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput"></a>

```typescript
public readonly statementTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput"></a>

```typescript
public readonly tablesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WarehouseInteractiveTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `warehouseSizeInput`<sup>Optional</sup> <a name="warehouseSizeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput"></a>

```typescript
public readonly warehouseSizeInput: string;
```

- *Type:* string

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume"></a>

```typescript
public readonly autoResume: string;
```

- *Type:* string

---

##### `autoSuspend`<sup>Required</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend"></a>

```typescript
public readonly autoSuspend: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `fallbackWarehouse`<sup>Required</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse"></a>

```typescript
public readonly fallbackWarehouse: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxClusterCount`<sup>Required</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount"></a>

```typescript
public readonly maxClusterCount: number;
```

- *Type:* number

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

---

##### `minClusterCount`<sup>Required</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount"></a>

```typescript
public readonly minClusterCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

---

##### `warehouseSize`<sup>Required</sup> <a name="warehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize"></a>

```typescript
public readonly warehouseSize: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseInteractiveConfig <a name="WarehouseInteractiveConfig" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveConfig: warehouseInteractive.WarehouseInteractiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name">name</a></code> | <code>string</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume">autoResume</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend">autoSuspend</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code>string</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended">initiallySuspended</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount">maxClusterCount</a></code> | <code>number</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount">minClusterCount</a></code> | <code>number</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables">tables</a></code> | <code>string[]</code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize">warehouseSize</a></code> | <code>string</code> | Specifies the size of the interactive warehouse. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `autoResume`<sup>Optional</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume"></a>

```typescript
public readonly autoResume: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `autoSuspend`<sup>Optional</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend"></a>

```typescript
public readonly autoSuspend: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `fallbackWarehouse`<sup>Optional</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse"></a>

```typescript
public readonly fallbackWarehouse: string;
```

- *Type:* string

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `maxClusterCount`<sup>Optional</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount"></a>

```typescript
public readonly maxClusterCount: number;
```

- *Type:* number

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `minClusterCount`<sup>Optional</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount"></a>

```typescript
public readonly minClusterCount: number;
```

- *Type:* number

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WarehouseInteractiveTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `warehouseSize`<sup>Optional</sup> <a name="warehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize"></a>

```typescript
public readonly warehouseSize: string;
```

- *Type:* string

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

### WarehouseInteractiveParameters <a name="WarehouseInteractiveParameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveParameters: warehouseInteractive.WarehouseInteractiveParameters = { ... }
```


### WarehouseInteractiveParametersFallbackWarehouse <a name="WarehouseInteractiveParametersFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveParametersFallbackWarehouse: warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse = { ... }
```


### WarehouseInteractiveParametersMaxConcurrencyLevel <a name="WarehouseInteractiveParametersMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveParametersMaxConcurrencyLevel: warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel = { ... }
```


### WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveParametersStatementQueuedTimeoutInSeconds: warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds = { ... }
```


### WarehouseInteractiveParametersStatementTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveParametersStatementTimeoutInSeconds: warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds = { ... }
```


### WarehouseInteractiveShowOutput <a name="WarehouseInteractiveShowOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveShowOutput: warehouseInteractive.WarehouseInteractiveShowOutput = { ... }
```


### WarehouseInteractiveTimeouts <a name="WarehouseInteractiveTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

const warehouseInteractiveTimeouts: warehouseInteractive.WarehouseInteractiveTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseInteractiveParametersFallbackWarehouseList <a name="WarehouseInteractiveParametersFallbackWarehouseList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveParametersFallbackWarehouseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveParametersFallbackWarehouseOutputReference <a name="WarehouseInteractiveParametersFallbackWarehouseOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveParametersFallbackWarehouse;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a>

---


### WarehouseInteractiveParametersList <a name="WarehouseInteractiveParametersList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveParametersMaxConcurrencyLevelList <a name="WarehouseInteractiveParametersMaxConcurrencyLevelList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference <a name="WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveParametersMaxConcurrencyLevel;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a>

---


### WarehouseInteractiveParametersOutputReference <a name="WarehouseInteractiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fallbackWarehouse`<sup>Required</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse"></a>

```typescript
public readonly fallbackWarehouse: WarehouseInteractiveParametersFallbackWarehouseList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a>

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: WarehouseInteractiveParametersMaxConcurrencyLevelList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a>

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: WarehouseInteractiveParametersStatementTimeoutInSecondsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a>

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveParametersStatementTimeoutInSeconds;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseInteractiveShowOutputList <a name="WarehouseInteractiveShowOutputList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get"></a>

```typescript
public get(index: number): WarehouseInteractiveShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WarehouseInteractiveShowOutputOutputReference <a name="WarehouseInteractiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume">autoResume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend">autoSuspend</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available">available</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent">isCurrent</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount">maxClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount">minClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other">other</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning">provisioning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued">queued</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing">quiescing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running">running</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters">startedClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables">tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume"></a>

```typescript
public readonly autoResume: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoSuspend`<sup>Required</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend"></a>

```typescript
public readonly autoSuspend: number;
```

- *Type:* number

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available"></a>

```typescript
public readonly available: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `isCurrent`<sup>Required</sup> <a name="isCurrent" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent"></a>

```typescript
public readonly isCurrent: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxClusterCount`<sup>Required</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount"></a>

```typescript
public readonly maxClusterCount: number;
```

- *Type:* number

---

##### `minClusterCount`<sup>Required</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount"></a>

```typescript
public readonly minClusterCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `other`<sup>Required</sup> <a name="other" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other"></a>

```typescript
public readonly other: number;
```

- *Type:* number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning"></a>

```typescript
public readonly provisioning: number;
```

- *Type:* number

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued"></a>

```typescript
public readonly queued: number;
```

- *Type:* number

---

##### `quiescing`<sup>Required</sup> <a name="quiescing" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing"></a>

```typescript
public readonly quiescing: number;
```

- *Type:* number

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn"></a>

```typescript
public readonly resumedOn: string;
```

- *Type:* string

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running"></a>

```typescript
public readonly running: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `startedClusters`<sup>Required</sup> <a name="startedClusters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters"></a>

```typescript
public readonly startedClusters: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WarehouseInteractiveShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a>

---


### WarehouseInteractiveTimeoutsOutputReference <a name="WarehouseInteractiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer"></a>

```typescript
import { warehouseInteractive } from '@cdktn/provider-snowflake'

new warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WarehouseInteractiveTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---



