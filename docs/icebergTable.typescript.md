# `icebergTable` Submodule <a name="`icebergTable` Submodule" id="@cdktn/provider-snowflake.icebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTable <a name="IcebergTable" id="@cdktn/provider-snowflake.icebergTable.IcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table snowflake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTable(scope: Construct, id: string, config: IcebergTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig">IcebergTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig">IcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy">putAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint">putCheckConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint">putForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy">putPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint">putPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy">putRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint">putUniqueConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy">resetAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation">resetBaseLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync">resetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking">resetChangeTracking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint">resetCheckConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy">resetClusterBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction">resetEnableDataCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead">resetEnableIcebergMergeOnRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging">resetErrorLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint">resetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion">resetIcebergVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy">resetPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout">resetPathLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint">resetPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy">resetRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize">resetTargetFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint">resetUniqueConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregationPolicy` <a name="putAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy"></a>

```typescript
public putAggregationPolicy(value: IcebergTableAggregationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---

##### `putCheckConstraint` <a name="putCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint"></a>

```typescript
public putCheckConstraint(value: IResolvable | IcebergTableCheckConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]

---

##### `putColumn` <a name="putColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn"></a>

```typescript
public putColumn(value: IResolvable | IcebergTableColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]

---

##### `putForeignKeyConstraint` <a name="putForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint"></a>

```typescript
public putForeignKeyConstraint(value: IResolvable | IcebergTableForeignKeyConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]

---

##### `putPartitionBy` <a name="putPartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy"></a>

```typescript
public putPartitionBy(value: IResolvable | IcebergTablePartitionBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]

---

##### `putPrimaryKeyConstraint` <a name="putPrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint"></a>

```typescript
public putPrimaryKeyConstraint(value: IcebergTablePrimaryKeyConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---

##### `putRowAccessPolicy` <a name="putRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy"></a>

```typescript
public putRowAccessPolicy(value: IcebergTableRowAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts"></a>

```typescript
public putTimeouts(value: IcebergTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---

##### `putUniqueConstraint` <a name="putUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint"></a>

```typescript
public putUniqueConstraint(value: IResolvable | IcebergTableUniqueConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]

---

##### `resetAggregationPolicy` <a name="resetAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy"></a>

```typescript
public resetAggregationPolicy(): void
```

##### `resetBaseLocation` <a name="resetBaseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation"></a>

```typescript
public resetBaseLocation(): void
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetCatalogSync` <a name="resetCatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync"></a>

```typescript
public resetCatalogSync(): void
```

##### `resetChangeTracking` <a name="resetChangeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking"></a>

```typescript
public resetChangeTracking(): void
```

##### `resetCheckConstraint` <a name="resetCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint"></a>

```typescript
public resetCheckConstraint(): void
```

##### `resetClusterBy` <a name="resetClusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy"></a>

```typescript
public resetClusterBy(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetEnableDataCompaction` <a name="resetEnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction"></a>

```typescript
public resetEnableDataCompaction(): void
```

##### `resetEnableIcebergMergeOnRead` <a name="resetEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead"></a>

```typescript
public resetEnableIcebergMergeOnRead(): void
```

##### `resetErrorLogging` <a name="resetErrorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging"></a>

```typescript
public resetErrorLogging(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetForeignKeyConstraint` <a name="resetForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint"></a>

```typescript
public resetForeignKeyConstraint(): void
```

##### `resetIcebergVersion` <a name="resetIcebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion"></a>

```typescript
public resetIcebergVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays"></a>

```typescript
public resetMaxDataExtensionTimeInDays(): void
```

##### `resetPartitionBy` <a name="resetPartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy"></a>

```typescript
public resetPartitionBy(): void
```

##### `resetPathLayout` <a name="resetPathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout"></a>

```typescript
public resetPathLayout(): void
```

##### `resetPrimaryKeyConstraint` <a name="resetPrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint"></a>

```typescript
public resetPrimaryKeyConstraint(): void
```

##### `resetRowAccessPolicy` <a name="resetRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy"></a>

```typescript
public resetRowAccessPolicy(): void
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy"></a>

```typescript
public resetStorageSerializationPolicy(): void
```

##### `resetTargetFileSize` <a name="resetTargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize"></a>

```typescript
public resetTargetFileSize(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUniqueConstraint` <a name="resetUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint"></a>

```typescript
public resetUniqueConstraint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

icebergTable.IcebergTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

icebergTable.IcebergTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

icebergTable.IcebergTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

icebergTable.IcebergTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy">aggregationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint">checkConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column">column</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy">partitionBy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy">rowAccessPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint">uniqueConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput">aggregationPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput">baseLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput">catalogSyncInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput">changeTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput">checkConstraintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput">clusterByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput">columnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput">enableDataCompactionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput">enableIcebergMergeOnReadInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput">errorLoggingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput">foreignKeyConstraintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput">icebergVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput">partitionByInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput">pathLayoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput">primaryKeyConstraintInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput">rowAccessPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput">targetFileSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput">uniqueConstraintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation">baseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync">catalogSync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking">changeTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy">clusterBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction">enableDataCompaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging">errorLogging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion">icebergVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout">pathLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize">targetFileSize</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aggregationPolicy`<sup>Required</sup> <a name="aggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy"></a>

```typescript
public readonly aggregationPolicy: IcebergTableAggregationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a>

---

##### `checkConstraint`<sup>Required</sup> <a name="checkConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint"></a>

```typescript
public readonly checkConstraint: IcebergTableCheckConstraintList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column"></a>

```typescript
public readonly column: IcebergTableColumnList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput"></a>

```typescript
public readonly describeOutput: IcebergTableDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a>

---

##### `foreignKeyConstraint`<sup>Required</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: IcebergTableForeignKeyConstraintList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters"></a>

```typescript
public readonly parameters: IcebergTableParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a>

---

##### `partitionBy`<sup>Required</sup> <a name="partitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy"></a>

```typescript
public readonly partitionBy: IcebergTablePartitionByList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a>

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: IcebergTablePrimaryKeyConstraintOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a>

---

##### `rowAccessPolicy`<sup>Required</sup> <a name="rowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy"></a>

```typescript
public readonly rowAccessPolicy: IcebergTableRowAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput"></a>

```typescript
public readonly showOutput: IcebergTableShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts"></a>

```typescript
public readonly timeouts: IcebergTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a>

---

##### `uniqueConstraint`<sup>Required</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint"></a>

```typescript
public readonly uniqueConstraint: IcebergTableUniqueConstraintList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a>

---

##### `aggregationPolicyInput`<sup>Optional</sup> <a name="aggregationPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput"></a>

```typescript
public readonly aggregationPolicyInput: IcebergTableAggregationPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---

##### `baseLocationInput`<sup>Optional</sup> <a name="baseLocationInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput"></a>

```typescript
public readonly baseLocationInput: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `catalogSyncInput`<sup>Optional</sup> <a name="catalogSyncInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput"></a>

```typescript
public readonly catalogSyncInput: string;
```

- *Type:* string

---

##### `changeTrackingInput`<sup>Optional</sup> <a name="changeTrackingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput"></a>

```typescript
public readonly changeTrackingInput: string;
```

- *Type:* string

---

##### `checkConstraintInput`<sup>Optional</sup> <a name="checkConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput"></a>

```typescript
public readonly checkConstraintInput: IResolvable | IcebergTableCheckConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]

---

##### `clusterByInput`<sup>Optional</sup> <a name="clusterByInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput"></a>

```typescript
public readonly clusterByInput: string[];
```

- *Type:* string[]

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | IcebergTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `enableDataCompactionInput`<sup>Optional</sup> <a name="enableDataCompactionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput"></a>

```typescript
public readonly enableDataCompactionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableIcebergMergeOnReadInput`<sup>Optional</sup> <a name="enableIcebergMergeOnReadInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput"></a>

```typescript
public readonly enableIcebergMergeOnReadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `errorLoggingInput`<sup>Optional</sup> <a name="errorLoggingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput"></a>

```typescript
public readonly errorLoggingInput: string;
```

- *Type:* string

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `foreignKeyConstraintInput`<sup>Optional</sup> <a name="foreignKeyConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput"></a>

```typescript
public readonly foreignKeyConstraintInput: IResolvable | IcebergTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]

---

##### `icebergVersionInput`<sup>Optional</sup> <a name="icebergVersionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput"></a>

```typescript
public readonly icebergVersionInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput"></a>

```typescript
public readonly maxDataExtensionTimeInDaysInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionByInput`<sup>Optional</sup> <a name="partitionByInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput"></a>

```typescript
public readonly partitionByInput: IResolvable | IcebergTablePartitionBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]

---

##### `pathLayoutInput`<sup>Optional</sup> <a name="pathLayoutInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput"></a>

```typescript
public readonly pathLayoutInput: string;
```

- *Type:* string

---

##### `primaryKeyConstraintInput`<sup>Optional</sup> <a name="primaryKeyConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput"></a>

```typescript
public readonly primaryKeyConstraintInput: IcebergTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---

##### `rowAccessPolicyInput`<sup>Optional</sup> <a name="rowAccessPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput"></a>

```typescript
public readonly rowAccessPolicyInput: IcebergTableRowAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput"></a>

```typescript
public readonly storageSerializationPolicyInput: string;
```

- *Type:* string

---

##### `targetFileSizeInput`<sup>Optional</sup> <a name="targetFileSizeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput"></a>

```typescript
public readonly targetFileSizeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---

##### `uniqueConstraintInput`<sup>Optional</sup> <a name="uniqueConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput"></a>

```typescript
public readonly uniqueConstraintInput: IResolvable | IcebergTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync"></a>

```typescript
public readonly catalogSync: string;
```

- *Type:* string

---

##### `changeTracking`<sup>Required</sup> <a name="changeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking"></a>

```typescript
public readonly changeTracking: string;
```

- *Type:* string

---

##### `clusterBy`<sup>Required</sup> <a name="clusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy"></a>

```typescript
public readonly clusterBy: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `enableDataCompaction`<sup>Required</sup> <a name="enableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction"></a>

```typescript
public readonly enableDataCompaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead"></a>

```typescript
public readonly enableIcebergMergeOnRead: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `errorLogging`<sup>Required</sup> <a name="errorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging"></a>

```typescript
public readonly errorLogging: string;
```

- *Type:* string

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `icebergVersion`<sup>Required</sup> <a name="icebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion"></a>

```typescript
public readonly icebergVersion: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathLayout`<sup>Required</sup> <a name="pathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout"></a>

```typescript
public readonly pathLayout: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize"></a>

```typescript
public readonly targetFileSize: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableAggregationPolicy <a name="IcebergTableAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableAggregationPolicy: icebergTable.IcebergTableAggregationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName">policyName</a></code> | <code>string</code> | Aggregation policy name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey">entityKey</a></code> | <code>string[]</code> | Defines which columns uniquely identify an entity within the Iceberg table. |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Aggregation policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `entityKey`<sup>Optional</sup> <a name="entityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey"></a>

```typescript
public readonly entityKey: string[];
```

- *Type:* string[]

Defines which columns uniquely identify an entity within the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#entity_key IcebergTable#entity_key}

---

### IcebergTableCheckConstraint <a name="IcebergTableCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableCheckConstraint: icebergTable.IcebergTableCheckConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression">expression</a></code> | <code>string</code> | The CHECK constraint expression. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate">validate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`). |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The CHECK constraint expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableColumn <a name="IcebergTableColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableColumn: icebergTable.IcebergTableColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name">name</a></code> | <code>string</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type">type</a></code> | <code>string</code> | Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment">comment</a></code> | <code>string</code> | Column comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy">maskingPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | masking_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull">notNull</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy">projectionPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | projection_policy block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#type IcebergTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Column comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default"></a>

```typescript
public readonly default: IcebergTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#default IcebergTable#default}

---

##### `maskingPolicy`<sup>Optional</sup> <a name="maskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: IcebergTableColumnMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#masking_policy IcebergTable#masking_policy}

---

##### `notNull`<sup>Optional</sup> <a name="notNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull"></a>

```typescript
public readonly notNull: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#not_null IcebergTable#not_null}

---

##### `projectionPolicy`<sup>Optional</sup> <a name="projectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy"></a>

```typescript
public readonly projectionPolicy: IcebergTableColumnProjectionPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

projection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#projection_policy IcebergTable#projection_policy}

---

### IcebergTableColumnDefault <a name="IcebergTableColumnDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableColumnDefault: icebergTable.IcebergTableColumnDefault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression">expression</a></code> | <code>string</code> | The default expression value for the column. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The default expression value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

### IcebergTableColumnMaskingPolicy <a name="IcebergTableColumnMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableColumnMaskingPolicy: icebergTable.IcebergTableColumnMaskingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName">policyName</a></code> | <code>string</code> | Masking policy name. For more information about this resource, see [docs](./masking_policy). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using">using</a></code> | <code>string[]</code> | Specifies the arguments to pass into the conditional masking policy SQL expression, in order. |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Masking policy name. For more information about this resource, see [docs](./masking_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using"></a>

```typescript
public readonly using: string[];
```

- *Type:* string[]

Specifies the arguments to pass into the conditional masking policy SQL expression, in order.

The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#using IcebergTable#using}

---

### IcebergTableColumnProjectionPolicy <a name="IcebergTableColumnProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableColumnProjectionPolicy: icebergTable.IcebergTableColumnProjectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName">policyName</a></code> | <code>string</code> | Projection policy name. |

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Projection policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableConfig <a name="IcebergTableConfig" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableConfig: icebergTable.IcebergTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column">column</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy">aggregationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | aggregation_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation">baseLocation</a></code> | <code>string</code> | The path to a directory where Snowflake can write data and metadata files for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog">catalog</a></code> | <code>string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync">catalogSync</a></code> | <code>string</code> | Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking">changeTracking</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint">checkConstraint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]</code> | check_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy">clusterBy</a></code> | <code>string[]</code> | A list of one or more table columns/expressions to be used as clustering key(s) for the table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction">enableDataCompaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging">errorLogging</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion">icebergVersion</a></code> | <code>number</code> | Specifies the Iceberg table format version. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy">partitionBy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]</code> | partition_by block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout">pathLayout</a></code> | <code>string</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy">rowAccessPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | row_access_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize">targetFileSize</a></code> | <code>string</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint">uniqueConstraint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]</code> | unique_constraint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column"></a>

```typescript
public readonly column: IResolvable | IcebergTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#database IcebergTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#schema IcebergTable#schema}

---

##### `aggregationPolicy`<sup>Optional</sup> <a name="aggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy"></a>

```typescript
public readonly aggregationPolicy: IcebergTableAggregationPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

aggregation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#aggregation_policy IcebergTable#aggregation_policy}

---

##### `baseLocation`<sup>Optional</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

The path to a directory where Snowflake can write data and metadata files for the Iceberg table.

Specify a relative path from the table's `EXTERNAL_VOLUME` location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#base_location IcebergTable#base_location}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog IcebergTable#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync"></a>

```typescript
public readonly catalogSync: string;
```

- *Type:* string

Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog.

For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog_sync IcebergTable#catalog_sync}

---

##### `changeTracking`<sup>Optional</sup> <a name="changeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking"></a>

```typescript
public readonly changeTracking: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table.

Cannot be changed after creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#change_tracking IcebergTable#change_tracking}

---

##### `checkConstraint`<sup>Optional</sup> <a name="checkConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint"></a>

```typescript
public readonly checkConstraint: IResolvable | IcebergTableCheckConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]

check_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#check_constraint IcebergTable#check_constraint}

---

##### `clusterBy`<sup>Optional</sup> <a name="clusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy"></a>

```typescript
public readonly clusterBy: string[];
```

- *Type:* string[]

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#cluster_by IcebergTable#cluster_by}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#data_retention_time_in_days IcebergTable#data_retention_time_in_days}

---

##### `enableDataCompaction`<sup>Optional</sup> <a name="enableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction"></a>

```typescript
public readonly enableDataCompaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_data_compaction IcebergTable#enable_data_compaction}

---

##### `enableIcebergMergeOnRead`<sup>Optional</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead"></a>

```typescript
public readonly enableIcebergMergeOnRead: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_iceberg_merge_on_read IcebergTable#enable_iceberg_merge_on_read}

---

##### `errorLogging`<sup>Optional</sup> <a name="errorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging"></a>

```typescript
public readonly errorLogging: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#error_logging IcebergTable#error_logging}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#external_volume IcebergTable#external_volume}

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: IResolvable | IcebergTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#foreign_key_constraint IcebergTable#foreign_key_constraint}

---

##### `icebergVersion`<sup>Optional</sup> <a name="icebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion"></a>

```typescript
public readonly icebergVersion: number;
```

- *Type:* number

Specifies the Iceberg table format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#iceberg_version IcebergTable#iceberg_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#max_data_extension_time_in_days IcebergTable#max_data_extension_time_in_days}

---

##### `partitionBy`<sup>Optional</sup> <a name="partitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy"></a>

```typescript
public readonly partitionBy: IResolvable | IcebergTablePartitionBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]

partition_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#partition_by IcebergTable#partition_by}

---

##### `pathLayout`<sup>Optional</sup> <a name="pathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout"></a>

```typescript
public readonly pathLayout: string;
```

- *Type:* string

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#path_layout IcebergTable#path_layout}

---

##### `primaryKeyConstraint`<sup>Optional</sup> <a name="primaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: IcebergTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#primary_key_constraint IcebergTable#primary_key_constraint}

---

##### `rowAccessPolicy`<sup>Optional</sup> <a name="rowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy"></a>

```typescript
public readonly rowAccessPolicy: IcebergTableRowAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

row_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#row_access_policy IcebergTable#row_access_policy}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#storage_serialization_policy IcebergTable#storage_serialization_policy}

---

##### `targetFileSize`<sup>Optional</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize"></a>

```typescript
public readonly targetFileSize: string;
```

- *Type:* string

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#target_file_size IcebergTable#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IcebergTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#timeouts IcebergTable#timeouts}

---

##### `uniqueConstraint`<sup>Optional</sup> <a name="uniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint"></a>

```typescript
public readonly uniqueConstraint: IResolvable | IcebergTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#unique_constraint IcebergTable#unique_constraint}

---

### IcebergTableDescribeOutput <a name="IcebergTableDescribeOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableDescribeOutput: icebergTable.IcebergTableDescribeOutput = { ... }
```


### IcebergTableForeignKeyConstraint <a name="IcebergTableForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableForeignKeyConstraint: icebergTable.IcebergTableForeignKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column">column</a></code> | <code>string[]</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName">tableName</a></code> | <code>string</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment">comment</a></code> | <code>string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable">deferrable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable">enable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced">enforced</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match">match</a></code> | <code>string</code> | The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL]. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete">onDelete</a></code> | <code>string</code> | Specifies the action to perform when the referenced primary/unique key is deleted. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate">onUpdate</a></code> | <code>string</code> | Specifies the action to perform when the referenced primary/unique key is updated. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn">refColumn</a></code> | <code>string[]</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely">rely</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate">validate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#table_name IcebergTable#table_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initiallyDeferred`<sup>Optional</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#match IcebergTable#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

Specifies the action to perform when the referenced primary/unique key is deleted.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on_delete IcebergTable#on_delete}

---

##### `onUpdate`<sup>Optional</sup> <a name="onUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate"></a>

```typescript
public readonly onUpdate: string;
```

- *Type:* string

Specifies the action to perform when the referenced primary/unique key is updated.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on_update IcebergTable#on_update}

---

##### `refColumn`<sup>Optional</sup> <a name="refColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn"></a>

```typescript
public readonly refColumn: string[];
```

- *Type:* string[]

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#ref_column IcebergTable#ref_column}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableParameters <a name="IcebergTableParameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParameters: icebergTable.IcebergTableParameters = { ... }
```


### IcebergTableParametersCatalog <a name="IcebergTableParametersCatalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersCatalog: icebergTable.IcebergTableParametersCatalog = { ... }
```


### IcebergTableParametersCatalogSync <a name="IcebergTableParametersCatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersCatalogSync: icebergTable.IcebergTableParametersCatalogSync = { ... }
```


### IcebergTableParametersDataRetentionTimeInDays <a name="IcebergTableParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersDataRetentionTimeInDays: icebergTable.IcebergTableParametersDataRetentionTimeInDays = { ... }
```


### IcebergTableParametersEnableDataCompaction <a name="IcebergTableParametersEnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersEnableDataCompaction: icebergTable.IcebergTableParametersEnableDataCompaction = { ... }
```


### IcebergTableParametersEnableIcebergMergeOnRead <a name="IcebergTableParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersEnableIcebergMergeOnRead: icebergTable.IcebergTableParametersEnableIcebergMergeOnRead = { ... }
```


### IcebergTableParametersExternalVolume <a name="IcebergTableParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersExternalVolume: icebergTable.IcebergTableParametersExternalVolume = { ... }
```


### IcebergTableParametersMaxDataExtensionTimeInDays <a name="IcebergTableParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersMaxDataExtensionTimeInDays: icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays = { ... }
```


### IcebergTableParametersStorageSerializationPolicy <a name="IcebergTableParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersStorageSerializationPolicy: icebergTable.IcebergTableParametersStorageSerializationPolicy = { ... }
```


### IcebergTableParametersTargetFileSize <a name="IcebergTableParametersTargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableParametersTargetFileSize: icebergTable.IcebergTableParametersTargetFileSize = { ... }
```


### IcebergTablePartitionBy <a name="IcebergTablePartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTablePartitionBy: icebergTable.IcebergTablePartitionBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | bucket block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day">day</a></code> | <code>string</code> | Partitions the table by the day component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour">hour</a></code> | <code>string</code> | Partitions the table by the hour component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity">identity</a></code> | <code>string</code> | Name of the column to use as-is for partitioning. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month">month</a></code> | <code>string</code> | Partitions the table by the month component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate">truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | truncate block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year">year</a></code> | <code>string</code> | Partitions the table by the year component of the column. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket"></a>

```typescript
public readonly bucket: IcebergTablePartitionByBucket;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#bucket IcebergTable#bucket}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Partitions the table by the day component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#day IcebergTable#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

Partitions the table by the hour component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#hour IcebergTable#hour}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

Name of the column to use as-is for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#identity IcebergTable#identity}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string

Partitions the table by the month component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#month IcebergTable#month}

---

##### `truncate`<sup>Optional</sup> <a name="truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate"></a>

```typescript
public readonly truncate: IcebergTablePartitionByTruncate;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

truncate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#truncate IcebergTable#truncate}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year"></a>

```typescript
public readonly year: string;
```

- *Type:* string

Partitions the table by the year component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#year IcebergTable#year}

---

### IcebergTablePartitionByBucket <a name="IcebergTablePartitionByBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTablePartitionByBucket: icebergTable.IcebergTablePartitionByBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column">column</a></code> | <code>string</code> | Name of the column to bucket. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets">numBuckets</a></code> | <code>number</code> | Number of buckets to hash the column values into. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Name of the column to bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `numBuckets`<sup>Required</sup> <a name="numBuckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets"></a>

```typescript
public readonly numBuckets: number;
```

- *Type:* number

Number of buckets to hash the column values into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#num_buckets IcebergTable#num_buckets}

---

### IcebergTablePartitionByTruncate <a name="IcebergTablePartitionByTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTablePartitionByTruncate: icebergTable.IcebergTablePartitionByTruncate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column">column</a></code> | <code>string</code> | Name of the column to truncate. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width">width</a></code> | <code>number</code> | Width to truncate the column value to. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Name of the column to truncate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Width to truncate the column value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#width IcebergTable#width}

---

### IcebergTablePrimaryKeyConstraint <a name="IcebergTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTablePrimaryKeyConstraint: icebergTable.IcebergTablePrimaryKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column">column</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment">comment</a></code> | <code>string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable">deferrable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable">enable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced">enforced</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely">rely</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate">validate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initiallyDeferred`<sup>Optional</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableRowAccessPolicy <a name="IcebergTableRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableRowAccessPolicy: icebergTable.IcebergTableRowAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on">on</a></code> | <code>string[]</code> | Defines which columns are affected by the policy. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName">policyName</a></code> | <code>string</code> | Row access policy name. For more information about this resource, see [docs](./row_access_policy). |

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on"></a>

```typescript
public readonly on: string[];
```

- *Type:* string[]

Defines which columns are affected by the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on IcebergTable#on}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Row access policy name. For more information about this resource, see [docs](./row_access_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableShowOutput <a name="IcebergTableShowOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableShowOutput: icebergTable.IcebergTableShowOutput = { ... }
```


### IcebergTableShowOutputAutoRefreshStatus <a name="IcebergTableShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableShowOutputAutoRefreshStatus: icebergTable.IcebergTableShowOutputAutoRefreshStatus = { ... }
```


### IcebergTableShowOutputPartitionSpecs <a name="IcebergTableShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableShowOutputPartitionSpecs: icebergTable.IcebergTableShowOutputPartitionSpecs = { ... }
```


### IcebergTableShowOutputPartitionSpecsFields <a name="IcebergTableShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableShowOutputPartitionSpecsFields: icebergTable.IcebergTableShowOutputPartitionSpecsFields = { ... }
```


### IcebergTableTimeouts <a name="IcebergTableTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableTimeouts: icebergTable.IcebergTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#create IcebergTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#delete IcebergTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#read IcebergTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#update IcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#create IcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#delete IcebergTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#read IcebergTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#update IcebergTable#update}.

---

### IcebergTableUniqueConstraint <a name="IcebergTableUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

const icebergTableUniqueConstraint: icebergTable.IcebergTableUniqueConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column">column</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment">comment</a></code> | <code>string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable">deferrable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable">enable</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced">enforced</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name">name</a></code> | <code>string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely">rely</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate">validate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initiallyDeferred`<sup>Optional</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableAggregationPolicyOutputReference <a name="IcebergTableAggregationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableAggregationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey">resetEntityKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityKey` <a name="resetEntityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey"></a>

```typescript
public resetEntityKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput">entityKeyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey">entityKey</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityKeyInput`<sup>Optional</sup> <a name="entityKeyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput"></a>

```typescript
public readonly entityKeyInput: string[];
```

- *Type:* string[]

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `entityKey`<sup>Required</sup> <a name="entityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey"></a>

```typescript
public readonly entityKey: string[];
```

- *Type:* string[]

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableAggregationPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---


### IcebergTableCheckConstraintList <a name="IcebergTableCheckConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableCheckConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get"></a>

```typescript
public get(index: number): IcebergTableCheckConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableCheckConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>[]

---


### IcebergTableCheckConstraintOutputReference <a name="IcebergTableCheckConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableCheckConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate"></a>

```typescript
public resetValidate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableCheckConstraint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>

---


### IcebergTableColumnDefaultOutputReference <a name="IcebergTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableColumnDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---


### IcebergTableColumnList <a name="IcebergTableColumnList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get"></a>

```typescript
public get(index: number): IcebergTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>[]

---


### IcebergTableColumnMaskingPolicyOutputReference <a name="IcebergTableColumnMaskingPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableColumnMaskingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput">usingInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using">using</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: string[];
```

- *Type:* string[]

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using"></a>

```typescript
public readonly using: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableColumnMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---


### IcebergTableColumnOutputReference <a name="IcebergTableColumnOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault">putDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy">putMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy">putProjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy">resetMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull">resetNotNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy">resetProjectionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefault` <a name="putDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault"></a>

```typescript
public putDefault(value: IcebergTableColumnDefault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---

##### `putMaskingPolicy` <a name="putMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy"></a>

```typescript
public putMaskingPolicy(value: IcebergTableColumnMaskingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---

##### `putProjectionPolicy` <a name="putProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy"></a>

```typescript
public putProjectionPolicy(value: IcebergTableColumnProjectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetMaskingPolicy` <a name="resetMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy"></a>

```typescript
public resetMaskingPolicy(): void
```

##### `resetNotNull` <a name="resetNotNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull"></a>

```typescript
public resetNotNull(): void
```

##### `resetProjectionPolicy` <a name="resetProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy"></a>

```typescript
public resetProjectionPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy">maskingPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy">projectionPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput">defaultInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput">maskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput">notNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput">projectionPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull">notNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default"></a>

```typescript
public readonly default: IcebergTableColumnDefaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a>

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: IcebergTableColumnMaskingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a>

---

##### `projectionPolicy`<sup>Required</sup> <a name="projectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy"></a>

```typescript
public readonly projectionPolicy: IcebergTableColumnProjectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: IcebergTableColumnDefault;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---

##### `maskingPolicyInput`<sup>Optional</sup> <a name="maskingPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput"></a>

```typescript
public readonly maskingPolicyInput: IcebergTableColumnMaskingPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notNullInput`<sup>Optional</sup> <a name="notNullInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput"></a>

```typescript
public readonly notNullInput: string;
```

- *Type:* string

---

##### `projectionPolicyInput`<sup>Optional</sup> <a name="projectionPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput"></a>

```typescript
public readonly projectionPolicyInput: IcebergTableColumnProjectionPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notNull`<sup>Required</sup> <a name="notNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull"></a>

```typescript
public readonly notNull: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>

---


### IcebergTableColumnProjectionPolicyOutputReference <a name="IcebergTableColumnProjectionPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableColumnProjectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableColumnProjectionPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---


### IcebergTableDescribeOutputList <a name="IcebergTableDescribeOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get"></a>

```typescript
public get(index: number): IcebergTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableDescribeOutputOutputReference <a name="IcebergTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable"></a>

```typescript
public readonly isNullable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain"></a>

```typescript
public readonly privacyDomain: string;
```

- *Type:* string

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType"></a>

```typescript
public readonly sourceIcebergType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey"></a>

```typescript
public readonly uniqueKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault"></a>

```typescript
public readonly writeDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a>

---


### IcebergTableForeignKeyConstraintList <a name="IcebergTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableForeignKeyConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get"></a>

```typescript
public get(index: number): IcebergTableForeignKeyConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableForeignKeyConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>[]

---


### IcebergTableForeignKeyConstraintOutputReference <a name="IcebergTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableForeignKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable">resetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred">resetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate">resetOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn">resetRefColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDeferrable` <a name="resetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable"></a>

```typescript
public resetDeferrable(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced"></a>

```typescript
public resetEnforced(): void
```

##### `resetInitiallyDeferred` <a name="resetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```typescript
public resetInitiallyDeferred(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete"></a>

```typescript
public resetOnDelete(): void
```

##### `resetOnUpdate` <a name="resetOnUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate"></a>

```typescript
public resetOnUpdate(): void
```

##### `resetRefColumn` <a name="resetRefColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn"></a>

```typescript
public resetRefColumn(): void
```

##### `resetRely` <a name="resetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely"></a>

```typescript
public resetRely(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate"></a>

```typescript
public resetValidate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput">columnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput">deferrableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput">enableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput">initiallyDeferredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput">onDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput">onUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput">refColumnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column">column</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable">enable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced">enforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete">onDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate">onUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn">refColumn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely">rely</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `deferrableInput`<sup>Optional</sup> <a name="deferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput"></a>

```typescript
public readonly deferrableInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: string;
```

- *Type:* string

---

##### `initiallyDeferredInput`<sup>Optional</sup> <a name="initiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```typescript
public readonly initiallyDeferredInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput"></a>

```typescript
public readonly onDeleteInput: string;
```

- *Type:* string

---

##### `onUpdateInput`<sup>Optional</sup> <a name="onUpdateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput"></a>

```typescript
public readonly onUpdateInput: string;
```

- *Type:* string

---

##### `refColumnInput`<sup>Optional</sup> <a name="refColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput"></a>

```typescript
public readonly refColumnInput: string[];
```

- *Type:* string[]

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput"></a>

```typescript
public readonly relyInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

---

##### `initiallyDeferred`<sup>Required</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

---

##### `onUpdate`<sup>Required</sup> <a name="onUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate"></a>

```typescript
public readonly onUpdate: string;
```

- *Type:* string

---

##### `refColumn`<sup>Required</sup> <a name="refColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn"></a>

```typescript
public readonly refColumn: string[];
```

- *Type:* string[]

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableForeignKeyConstraint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>

---


### IcebergTableParametersCatalogList <a name="IcebergTableParametersCatalogList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get"></a>

```typescript
public get(index: number): IcebergTableParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersCatalogOutputReference <a name="IcebergTableParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersCatalog;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a>

---


### IcebergTableParametersCatalogSyncList <a name="IcebergTableParametersCatalogSyncList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersCatalogSyncList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get"></a>

```typescript
public get(index: number): IcebergTableParametersCatalogSyncOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersCatalogSyncOutputReference <a name="IcebergTableParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersCatalogSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersCatalogSync;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a>

---


### IcebergTableParametersDataRetentionTimeInDaysList <a name="IcebergTableParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersDataRetentionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get"></a>

```typescript
public get(index: number): IcebergTableParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersDataRetentionTimeInDaysOutputReference <a name="IcebergTableParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersDataRetentionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a>

---


### IcebergTableParametersEnableDataCompactionList <a name="IcebergTableParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersEnableDataCompactionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get"></a>

```typescript
public get(index: number): IcebergTableParametersEnableDataCompactionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersEnableDataCompactionOutputReference <a name="IcebergTableParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersEnableDataCompactionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersEnableDataCompaction;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a>

---


### IcebergTableParametersEnableIcebergMergeOnReadList <a name="IcebergTableParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get"></a>

```typescript
public get(index: number): IcebergTableParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersEnableIcebergMergeOnReadOutputReference <a name="IcebergTableParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersEnableIcebergMergeOnRead;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a>

---


### IcebergTableParametersExternalVolumeList <a name="IcebergTableParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersExternalVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get"></a>

```typescript
public get(index: number): IcebergTableParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersExternalVolumeOutputReference <a name="IcebergTableParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersExternalVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersExternalVolume;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a>

---


### IcebergTableParametersList <a name="IcebergTableParametersList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get"></a>

```typescript
public get(index: number): IcebergTableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersMaxDataExtensionTimeInDaysList <a name="IcebergTableParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get"></a>

```typescript
public get(index: number): IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference <a name="IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersMaxDataExtensionTimeInDays;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a>

---


### IcebergTableParametersOutputReference <a name="IcebergTableParametersOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync">catalogSync</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction">enableDataCompaction</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize">targetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog"></a>

```typescript
public readonly catalog: IcebergTableParametersCatalogList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a>

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync"></a>

```typescript
public readonly catalogSync: IcebergTableParametersCatalogSyncList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a>

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: IcebergTableParametersDataRetentionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a>

---

##### `enableDataCompaction`<sup>Required</sup> <a name="enableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction"></a>

```typescript
public readonly enableDataCompaction: IcebergTableParametersEnableDataCompactionList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a>

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```typescript
public readonly enableIcebergMergeOnRead: IcebergTableParametersEnableIcebergMergeOnReadList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume"></a>

```typescript
public readonly externalVolume: IcebergTableParametersExternalVolumeList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a>

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: IcebergTableParametersMaxDataExtensionTimeInDaysList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a>

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: IcebergTableParametersStorageSerializationPolicyList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a>

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize"></a>

```typescript
public readonly targetFileSize: IcebergTableParametersTargetFileSizeList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a>

---


### IcebergTableParametersStorageSerializationPolicyList <a name="IcebergTableParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersStorageSerializationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get"></a>

```typescript
public get(index: number): IcebergTableParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersStorageSerializationPolicyOutputReference <a name="IcebergTableParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersStorageSerializationPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a>

---


### IcebergTableParametersTargetFileSizeList <a name="IcebergTableParametersTargetFileSizeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersTargetFileSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get"></a>

```typescript
public get(index: number): IcebergTableParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableParametersTargetFileSizeOutputReference <a name="IcebergTableParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableParametersTargetFileSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableParametersTargetFileSize;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a>

---


### IcebergTablePartitionByBucketOutputReference <a name="IcebergTablePartitionByBucketOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTablePartitionByBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput">numBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets">numBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `numBucketsInput`<sup>Optional</sup> <a name="numBucketsInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput"></a>

```typescript
public readonly numBucketsInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `numBuckets`<sup>Required</sup> <a name="numBuckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets"></a>

```typescript
public readonly numBuckets: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTablePartitionByBucket;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---


### IcebergTablePartitionByList <a name="IcebergTablePartitionByList" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTablePartitionByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get"></a>

```typescript
public get(index: number): IcebergTablePartitionByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTablePartitionBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>[]

---


### IcebergTablePartitionByOutputReference <a name="IcebergTablePartitionByOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTablePartitionByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket">putBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate">putTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate">resetTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBucket` <a name="putBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket"></a>

```typescript
public putBucket(value: IcebergTablePartitionByBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---

##### `putTruncate` <a name="putTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate"></a>

```typescript
public putTruncate(value: IcebergTablePartitionByTruncate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDay` <a name="resetDay" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetHour` <a name="resetHour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetTruncate` <a name="resetTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate"></a>

```typescript
public resetTruncate(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate">truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput">hourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput">monthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput">truncateInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput">yearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month">month</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year">year</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket"></a>

```typescript
public readonly bucket: IcebergTablePartitionByBucketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a>

---

##### `truncate`<sup>Required</sup> <a name="truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate"></a>

```typescript
public readonly truncate: IcebergTablePartitionByTruncateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: IcebergTablePartitionByBucket;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: string;
```

- *Type:* string

---

##### `truncateInput`<sup>Optional</sup> <a name="truncateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput"></a>

```typescript
public readonly truncateInput: IcebergTablePartitionByTruncate;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year"></a>

```typescript
public readonly year: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTablePartitionBy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>

---


### IcebergTablePartitionByTruncateOutputReference <a name="IcebergTablePartitionByTruncateOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTablePartitionByTruncateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTablePartitionByTruncate;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---


### IcebergTablePrimaryKeyConstraintOutputReference <a name="IcebergTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTablePrimaryKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable">resetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred">resetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDeferrable` <a name="resetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable"></a>

```typescript
public resetDeferrable(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced"></a>

```typescript
public resetEnforced(): void
```

##### `resetInitiallyDeferred` <a name="resetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```typescript
public resetInitiallyDeferred(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRely` <a name="resetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely"></a>

```typescript
public resetRely(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate"></a>

```typescript
public resetValidate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput">columnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput">deferrableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput">enableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput">initiallyDeferredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column">column</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable">enable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced">enforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely">rely</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `deferrableInput`<sup>Optional</sup> <a name="deferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput"></a>

```typescript
public readonly deferrableInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: string;
```

- *Type:* string

---

##### `initiallyDeferredInput`<sup>Optional</sup> <a name="initiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```typescript
public readonly initiallyDeferredInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput"></a>

```typescript
public readonly relyInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

---

##### `initiallyDeferred`<sup>Required</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTablePrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---


### IcebergTableRowAccessPolicyOutputReference <a name="IcebergTableRowAccessPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableRowAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput">onInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on">on</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput"></a>

```typescript
public readonly onInput: string[];
```

- *Type:* string[]

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on"></a>

```typescript
public readonly on: string[];
```

- *Type:* string[]

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableRowAccessPolicy;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---


### IcebergTableShowOutputAutoRefreshStatusList <a name="IcebergTableShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputAutoRefreshStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get"></a>

```typescript
public get(index: number): IcebergTableShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```typescript
public readonly currentSnapshotId: number;
```

- *Type:* number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```typescript
public readonly executionState: string;
```

- *Type:* string

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```typescript
public readonly lastSnapshotTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```typescript
public readonly pendingSnapshotCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableShowOutputAutoRefreshStatus;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a>

---


### IcebergTableShowOutputList <a name="IcebergTableShowOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get"></a>

```typescript
public get(index: number): IcebergTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableShowOutputOutputReference <a name="IcebergTableShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus"></a>

```typescript
public readonly autoRefreshStatus: IcebergTableShowOutputAutoRefreshStatusList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation"></a>

```typescript
public readonly baseLocation: string;
```

- *Type:* string

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata"></a>

```typescript
public readonly canWriteMetadata: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName"></a>

```typescript
public readonly catalogSyncName: string;
```

- *Type:* string

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName"></a>

```typescript
public readonly catalogTableName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId"></a>

```typescript
public readonly currentPartitionSpecId: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName"></a>

```typescript
public readonly externalVolumeName: string;
```

- *Type:* string

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```typescript
public readonly icebergTableFormatVersion: number;
```

- *Type:* number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType"></a>

```typescript
public readonly icebergTableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping"></a>

```typescript
public readonly nameMapping: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs"></a>

```typescript
public readonly partitionSpecs: IcebergTableShowOutputPartitionSpecsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a>

---


### IcebergTableShowOutputPartitionSpecsFieldsList <a name="IcebergTableShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get"></a>

```typescript
public get(index: number): IcebergTableShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableShowOutputPartitionSpecsFields;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a>

---


### IcebergTableShowOutputPartitionSpecsList <a name="IcebergTableShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputPartitionSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get"></a>

```typescript
public get(index: number): IcebergTableShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IcebergTableShowOutputPartitionSpecsOutputReference <a name="IcebergTableShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields"></a>

```typescript
public readonly fields: IcebergTableShowOutputPartitionSpecsFieldsList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IcebergTableShowOutputPartitionSpecs;
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a>

---


### IcebergTableTimeoutsOutputReference <a name="IcebergTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---


### IcebergTableUniqueConstraintList <a name="IcebergTableUniqueConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableUniqueConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get"></a>

```typescript
public get(index: number): IcebergTableUniqueConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableUniqueConstraint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>[]

---


### IcebergTableUniqueConstraintOutputReference <a name="IcebergTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer"></a>

```typescript
import { icebergTable } from '@cdktn/provider-snowflake'

new icebergTable.IcebergTableUniqueConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable">resetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred">resetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDeferrable` <a name="resetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable"></a>

```typescript
public resetDeferrable(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced"></a>

```typescript
public resetEnforced(): void
```

##### `resetInitiallyDeferred` <a name="resetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred"></a>

```typescript
public resetInitiallyDeferred(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRely` <a name="resetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely"></a>

```typescript
public resetRely(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate"></a>

```typescript
public resetValidate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput">columnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput">deferrableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput">enableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput">initiallyDeferredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column">column</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable">enable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced">enforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred">initiallyDeferred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely">rely</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `deferrableInput`<sup>Optional</sup> <a name="deferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput"></a>

```typescript
public readonly deferrableInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: string;
```

- *Type:* string

---

##### `initiallyDeferredInput`<sup>Optional</sup> <a name="initiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput"></a>

```typescript
public readonly initiallyDeferredInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput"></a>

```typescript
public readonly relyInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column"></a>

```typescript
public readonly column: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable"></a>

```typescript
public readonly deferrable: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable"></a>

```typescript
public readonly enable: string;
```

- *Type:* string

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced"></a>

```typescript
public readonly enforced: string;
```

- *Type:* string

---

##### `initiallyDeferred`<sup>Required</sup> <a name="initiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred"></a>

```typescript
public readonly initiallyDeferred: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely"></a>

```typescript
public readonly rely: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IcebergTableUniqueConstraint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>

---



