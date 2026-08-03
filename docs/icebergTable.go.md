# `icebergTable` Submodule <a name="`icebergTable` Submodule" id="@cdktn/provider-snowflake.icebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTable <a name="IcebergTable" id="@cdktn/provider-snowflake.icebergTable.IcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table snowflake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTable(scope Construct, id *string, config IcebergTableConfig) IcebergTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig">IcebergTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig">IcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy">PutAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint">PutCheckConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint">PutForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy">PutPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint">PutPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy">PutRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint">PutUniqueConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy">ResetAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation">ResetBaseLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync">ResetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking">ResetChangeTracking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint">ResetCheckConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy">ResetClusterBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction">ResetEnableDataCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead">ResetEnableIcebergMergeOnRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging">ResetErrorLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint">ResetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion">ResetIcebergVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy">ResetPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout">ResetPathLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint">ResetPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy">ResetRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize">ResetTargetFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint">ResetUniqueConstraint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregationPolicy` <a name="PutAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy"></a>

```go
func PutAggregationPolicy(value IcebergTableAggregationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---

##### `PutCheckConstraint` <a name="PutCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint"></a>

```go
func PutCheckConstraint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn"></a>

```go
func PutColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutForeignKeyConstraint` <a name="PutForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint"></a>

```go
func PutForeignKeyConstraint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPartitionBy` <a name="PutPartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy"></a>

```go
func PutPartitionBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrimaryKeyConstraint` <a name="PutPrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint"></a>

```go
func PutPrimaryKeyConstraint(value IcebergTablePrimaryKeyConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---

##### `PutRowAccessPolicy` <a name="PutRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy"></a>

```go
func PutRowAccessPolicy(value IcebergTableRowAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts"></a>

```go
func PutTimeouts(value IcebergTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---

##### `PutUniqueConstraint` <a name="PutUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint"></a>

```go
func PutUniqueConstraint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregationPolicy` <a name="ResetAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy"></a>

```go
func ResetAggregationPolicy()
```

##### `ResetBaseLocation` <a name="ResetBaseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation"></a>

```go
func ResetBaseLocation()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCatalogSync` <a name="ResetCatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync"></a>

```go
func ResetCatalogSync()
```

##### `ResetChangeTracking` <a name="ResetChangeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking"></a>

```go
func ResetChangeTracking()
```

##### `ResetCheckConstraint` <a name="ResetCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint"></a>

```go
func ResetCheckConstraint()
```

##### `ResetClusterBy` <a name="ResetClusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy"></a>

```go
func ResetClusterBy()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays"></a>

```go
func ResetDataRetentionTimeInDays()
```

##### `ResetEnableDataCompaction` <a name="ResetEnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction"></a>

```go
func ResetEnableDataCompaction()
```

##### `ResetEnableIcebergMergeOnRead` <a name="ResetEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead"></a>

```go
func ResetEnableIcebergMergeOnRead()
```

##### `ResetErrorLogging` <a name="ResetErrorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging"></a>

```go
func ResetErrorLogging()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetForeignKeyConstraint` <a name="ResetForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint"></a>

```go
func ResetForeignKeyConstraint()
```

##### `ResetIcebergVersion` <a name="ResetIcebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion"></a>

```go
func ResetIcebergVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays"></a>

```go
func ResetMaxDataExtensionTimeInDays()
```

##### `ResetPartitionBy` <a name="ResetPartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy"></a>

```go
func ResetPartitionBy()
```

##### `ResetPathLayout` <a name="ResetPathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout"></a>

```go
func ResetPathLayout()
```

##### `ResetPrimaryKeyConstraint` <a name="ResetPrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint"></a>

```go
func ResetPrimaryKeyConstraint()
```

##### `ResetRowAccessPolicy` <a name="ResetRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy"></a>

```go
func ResetRowAccessPolicy()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy"></a>

```go
func ResetStorageSerializationPolicy()
```

##### `ResetTargetFileSize` <a name="ResetTargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize"></a>

```go
func ResetTargetFileSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUniqueConstraint` <a name="ResetUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint"></a>

```go
func ResetUniqueConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.IcebergTable_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.IcebergTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.IcebergTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.IcebergTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy">AggregationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint">CheckConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column">Column</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy">PartitionBy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy">RowAccessPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint">UniqueConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput">AggregationPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput">BaseLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput">CatalogSyncInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput">ChangeTrackingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput">CheckConstraintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput">ClusterByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput">EnableDataCompactionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput">EnableIcebergMergeOnReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput">ErrorLoggingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput">ForeignKeyConstraintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput">IcebergVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput">PartitionByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput">PathLayoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput">PrimaryKeyConstraintInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput">RowAccessPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput">TargetFileSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput">UniqueConstraintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation">BaseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync">CatalogSync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking">ChangeTracking</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy">ClusterBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction">EnableDataCompaction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead">EnableIcebergMergeOnRead</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging">ErrorLogging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion">IcebergVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout">PathLayout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize">TargetFileSize</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregationPolicy`<sup>Required</sup> <a name="AggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy"></a>

```go
func AggregationPolicy() IcebergTableAggregationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a>

---

##### `CheckConstraint`<sup>Required</sup> <a name="CheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint"></a>

```go
func CheckConstraint() IcebergTableCheckConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column"></a>

```go
func Column() IcebergTableColumnList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput"></a>

```go
func DescribeOutput() IcebergTableDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a>

---

##### `ForeignKeyConstraint`<sup>Required</sup> <a name="ForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint"></a>

```go
func ForeignKeyConstraint() IcebergTableForeignKeyConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters"></a>

```go
func Parameters() IcebergTableParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a>

---

##### `PartitionBy`<sup>Required</sup> <a name="PartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy"></a>

```go
func PartitionBy() IcebergTablePartitionByList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a>

---

##### `PrimaryKeyConstraint`<sup>Required</sup> <a name="PrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint"></a>

```go
func PrimaryKeyConstraint() IcebergTablePrimaryKeyConstraintOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a>

---

##### `RowAccessPolicy`<sup>Required</sup> <a name="RowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy"></a>

```go
func RowAccessPolicy() IcebergTableRowAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput"></a>

```go
func ShowOutput() IcebergTableShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts"></a>

```go
func Timeouts() IcebergTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a>

---

##### `UniqueConstraint`<sup>Required</sup> <a name="UniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint"></a>

```go
func UniqueConstraint() IcebergTableUniqueConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a>

---

##### `AggregationPolicyInput`<sup>Optional</sup> <a name="AggregationPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput"></a>

```go
func AggregationPolicyInput() IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---

##### `BaseLocationInput`<sup>Optional</sup> <a name="BaseLocationInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput"></a>

```go
func BaseLocationInput() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CatalogSyncInput`<sup>Optional</sup> <a name="CatalogSyncInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput"></a>

```go
func CatalogSyncInput() *string
```

- *Type:* *string

---

##### `ChangeTrackingInput`<sup>Optional</sup> <a name="ChangeTrackingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput"></a>

```go
func ChangeTrackingInput() *string
```

- *Type:* *string

---

##### `CheckConstraintInput`<sup>Optional</sup> <a name="CheckConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput"></a>

```go
func CheckConstraintInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterByInput`<sup>Optional</sup> <a name="ClusterByInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput"></a>

```go
func ClusterByInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput"></a>

```go
func DataRetentionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `EnableDataCompactionInput`<sup>Optional</sup> <a name="EnableDataCompactionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput"></a>

```go
func EnableDataCompactionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIcebergMergeOnReadInput`<sup>Optional</sup> <a name="EnableIcebergMergeOnReadInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput"></a>

```go
func EnableIcebergMergeOnReadInput() interface{}
```

- *Type:* interface{}

---

##### `ErrorLoggingInput`<sup>Optional</sup> <a name="ErrorLoggingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput"></a>

```go
func ErrorLoggingInput() *string
```

- *Type:* *string

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `ForeignKeyConstraintInput`<sup>Optional</sup> <a name="ForeignKeyConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput"></a>

```go
func ForeignKeyConstraintInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergVersionInput`<sup>Optional</sup> <a name="IcebergVersionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput"></a>

```go
func IcebergVersionInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput"></a>

```go
func MaxDataExtensionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionByInput`<sup>Optional</sup> <a name="PartitionByInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput"></a>

```go
func PartitionByInput() interface{}
```

- *Type:* interface{}

---

##### `PathLayoutInput`<sup>Optional</sup> <a name="PathLayoutInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput"></a>

```go
func PathLayoutInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyConstraintInput`<sup>Optional</sup> <a name="PrimaryKeyConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput"></a>

```go
func PrimaryKeyConstraintInput() IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---

##### `RowAccessPolicyInput`<sup>Optional</sup> <a name="RowAccessPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput"></a>

```go
func RowAccessPolicyInput() IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput"></a>

```go
func StorageSerializationPolicyInput() *string
```

- *Type:* *string

---

##### `TargetFileSizeInput`<sup>Optional</sup> <a name="TargetFileSizeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput"></a>

```go
func TargetFileSizeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueConstraintInput`<sup>Optional</sup> <a name="UniqueConstraintInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput"></a>

```go
func UniqueConstraintInput() interface{}
```

- *Type:* interface{}

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation"></a>

```go
func BaseLocation() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `CatalogSync`<sup>Required</sup> <a name="CatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync"></a>

```go
func CatalogSync() *string
```

- *Type:* *string

---

##### `ChangeTracking`<sup>Required</sup> <a name="ChangeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking"></a>

```go
func ChangeTracking() *string
```

- *Type:* *string

---

##### `ClusterBy`<sup>Required</sup> <a name="ClusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy"></a>

```go
func ClusterBy() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() *f64
```

- *Type:* *f64

---

##### `EnableDataCompaction`<sup>Required</sup> <a name="EnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction"></a>

```go
func EnableDataCompaction() interface{}
```

- *Type:* interface{}

---

##### `EnableIcebergMergeOnRead`<sup>Required</sup> <a name="EnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead"></a>

```go
func EnableIcebergMergeOnRead() interface{}
```

- *Type:* interface{}

---

##### `ErrorLogging`<sup>Required</sup> <a name="ErrorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging"></a>

```go
func ErrorLogging() *string
```

- *Type:* *string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `IcebergVersion`<sup>Required</sup> <a name="IcebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion"></a>

```go
func IcebergVersion() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathLayout`<sup>Required</sup> <a name="PathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout"></a>

```go
func PathLayout() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() *string
```

- *Type:* *string

---

##### `TargetFileSize`<sup>Required</sup> <a name="TargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize"></a>

```go
func TargetFileSize() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableAggregationPolicy <a name="IcebergTableAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableAggregationPolicy {
	PolicyName: *string,
	EntityKey: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | Aggregation policy name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey">EntityKey</a></code> | <code>*[]*string</code> | Defines which columns uniquely identify an entity within the Iceberg table. |

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Aggregation policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `EntityKey`<sup>Optional</sup> <a name="EntityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey"></a>

```go
EntityKey *[]*string
```

- *Type:* *[]*string

Defines which columns uniquely identify an entity within the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#entity_key IcebergTable#entity_key}

---

### IcebergTableCheckConstraint <a name="IcebergTableCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableCheckConstraint {
	Expression: *string,
	Name: *string,
	Validate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression">Expression</a></code> | <code>*string</code> | The CHECK constraint expression. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name">Name</a></code> | <code>*string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate">Validate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`). |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The CHECK constraint expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableColumn <a name="IcebergTableColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableColumn {
	Name: *string,
	Type: *string,
	Comment: *string,
	Default: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableColumnDefault,
	MaskingPolicy: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableColumnMaskingPolicy,
	NotNull: *string,
	ProjectionPolicy: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableColumnProjectionPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name">Name</a></code> | <code>*string</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type">Type</a></code> | <code>*string</code> | Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment">Comment</a></code> | <code>*string</code> | Column comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default">Default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy">MaskingPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | masking_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull">NotNull</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy">ProjectionPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | projection_policy block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#type IcebergTable#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Column comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default"></a>

```go
Default IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#default IcebergTable#default}

---

##### `MaskingPolicy`<sup>Optional</sup> <a name="MaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy"></a>

```go
MaskingPolicy IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#masking_policy IcebergTable#masking_policy}

---

##### `NotNull`<sup>Optional</sup> <a name="NotNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull"></a>

```go
NotNull *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#not_null IcebergTable#not_null}

---

##### `ProjectionPolicy`<sup>Optional</sup> <a name="ProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy"></a>

```go
ProjectionPolicy IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

projection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#projection_policy IcebergTable#projection_policy}

---

### IcebergTableColumnDefault <a name="IcebergTableColumnDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableColumnDefault {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression">Expression</a></code> | <code>*string</code> | The default expression value for the column. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The default expression value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

### IcebergTableColumnMaskingPolicy <a name="IcebergTableColumnMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableColumnMaskingPolicy {
	PolicyName: *string,
	Using: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | Masking policy name. For more information about this resource, see [docs](./masking_policy). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using">Using</a></code> | <code>*[]*string</code> | Specifies the arguments to pass into the conditional masking policy SQL expression, in order. |

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Masking policy name. For more information about this resource, see [docs](./masking_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using"></a>

```go
Using *[]*string
```

- *Type:* *[]*string

Specifies the arguments to pass into the conditional masking policy SQL expression, in order.

The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#using IcebergTable#using}

---

### IcebergTableColumnProjectionPolicy <a name="IcebergTableColumnProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableColumnProjectionPolicy {
	PolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | Projection policy name. |

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Projection policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableConfig <a name="IcebergTableConfig" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Column: interface{},
	Database: *string,
	Name: *string,
	Schema: *string,
	AggregationPolicy: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableAggregationPolicy,
	BaseLocation: *string,
	Catalog: *string,
	CatalogSync: *string,
	ChangeTracking: *string,
	CheckConstraint: interface{},
	ClusterBy: *[]*string,
	Comment: *string,
	DataRetentionTimeInDays: *f64,
	EnableDataCompaction: interface{},
	EnableIcebergMergeOnRead: interface{},
	ErrorLogging: *string,
	ExternalVolume: *string,
	ForeignKeyConstraint: interface{},
	IcebergVersion: *f64,
	Id: *string,
	MaxDataExtensionTimeInDays: *f64,
	PartitionBy: interface{},
	PathLayout: *string,
	PrimaryKeyConstraint: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTablePrimaryKeyConstraint,
	RowAccessPolicy: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableRowAccessPolicy,
	StorageSerializationPolicy: *string,
	TargetFileSize: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTableTimeouts,
	UniqueConstraint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column">Column</a></code> | <code>interface{}</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy">AggregationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | aggregation_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation">BaseLocation</a></code> | <code>*string</code> | The path to a directory where Snowflake can write data and metadata files for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync">CatalogSync</a></code> | <code>*string</code> | Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking">ChangeTracking</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint">CheckConstraint</a></code> | <code>interface{}</code> | check_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy">ClusterBy</a></code> | <code>*[]*string</code> | A list of one or more table columns/expressions to be used as clustering key(s) for the table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction">EnableDataCompaction</a></code> | <code>interface{}</code> | Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead">EnableIcebergMergeOnRead</a></code> | <code>interface{}</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging">ErrorLogging</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code>interface{}</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion">IcebergVersion</a></code> | <code>*f64</code> | Specifies the Iceberg table format version. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#id IcebergTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy">PartitionBy</a></code> | <code>interface{}</code> | partition_by block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout">PathLayout</a></code> | <code>*string</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy">RowAccessPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | row_access_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize">TargetFileSize</a></code> | <code>*string</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint">UniqueConstraint</a></code> | <code>interface{}</code> | unique_constraint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column"></a>

```go
Column interface{}
```

- *Type:* interface{}

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#database IcebergTable#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#schema IcebergTable#schema}

---

##### `AggregationPolicy`<sup>Optional</sup> <a name="AggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy"></a>

```go
AggregationPolicy IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

aggregation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#aggregation_policy IcebergTable#aggregation_policy}

---

##### `BaseLocation`<sup>Optional</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation"></a>

```go
BaseLocation *string
```

- *Type:* *string

The path to a directory where Snowflake can write data and metadata files for the Iceberg table.

Specify a relative path from the table's `EXTERNAL_VOLUME` location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#base_location IcebergTable#base_location}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#catalog IcebergTable#catalog}

---

##### `CatalogSync`<sup>Optional</sup> <a name="CatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync"></a>

```go
CatalogSync *string
```

- *Type:* *string

Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog.

For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#catalog_sync IcebergTable#catalog_sync}

---

##### `ChangeTracking`<sup>Optional</sup> <a name="ChangeTracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking"></a>

```go
ChangeTracking *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table.

Cannot be changed after creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#change_tracking IcebergTable#change_tracking}

---

##### `CheckConstraint`<sup>Optional</sup> <a name="CheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint"></a>

```go
CheckConstraint interface{}
```

- *Type:* interface{}

check_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#check_constraint IcebergTable#check_constraint}

---

##### `ClusterBy`<sup>Optional</sup> <a name="ClusterBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy"></a>

```go
ClusterBy *[]*string
```

- *Type:* *[]*string

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#cluster_by IcebergTable#cluster_by}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays"></a>

```go
DataRetentionTimeInDays *f64
```

- *Type:* *f64

Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#data_retention_time_in_days IcebergTable#data_retention_time_in_days}

---

##### `EnableDataCompaction`<sup>Optional</sup> <a name="EnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction"></a>

```go
EnableDataCompaction interface{}
```

- *Type:* interface{}

Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable_data_compaction IcebergTable#enable_data_compaction}

---

##### `EnableIcebergMergeOnRead`<sup>Optional</sup> <a name="EnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead"></a>

```go
EnableIcebergMergeOnRead interface{}
```

- *Type:* interface{}

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable_iceberg_merge_on_read IcebergTable#enable_iceberg_merge_on_read}

---

##### `ErrorLogging`<sup>Optional</sup> <a name="ErrorLogging" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging"></a>

```go
ErrorLogging *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#error_logging IcebergTable#error_logging}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#external_volume IcebergTable#external_volume}

---

##### `ForeignKeyConstraint`<sup>Optional</sup> <a name="ForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint"></a>

```go
ForeignKeyConstraint interface{}
```

- *Type:* interface{}

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#foreign_key_constraint IcebergTable#foreign_key_constraint}

---

##### `IcebergVersion`<sup>Optional</sup> <a name="IcebergVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion"></a>

```go
IcebergVersion *f64
```

- *Type:* *f64

Specifies the Iceberg table format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#iceberg_version IcebergTable#iceberg_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#id IcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays"></a>

```go
MaxDataExtensionTimeInDays *f64
```

- *Type:* *f64

Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#max_data_extension_time_in_days IcebergTable#max_data_extension_time_in_days}

---

##### `PartitionBy`<sup>Optional</sup> <a name="PartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy"></a>

```go
PartitionBy interface{}
```

- *Type:* interface{}

partition_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#partition_by IcebergTable#partition_by}

---

##### `PathLayout`<sup>Optional</sup> <a name="PathLayout" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout"></a>

```go
PathLayout *string
```

- *Type:* *string

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#path_layout IcebergTable#path_layout}

---

##### `PrimaryKeyConstraint`<sup>Optional</sup> <a name="PrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint"></a>

```go
PrimaryKeyConstraint IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#primary_key_constraint IcebergTable#primary_key_constraint}

---

##### `RowAccessPolicy`<sup>Optional</sup> <a name="RowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy"></a>

```go
RowAccessPolicy IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

row_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#row_access_policy IcebergTable#row_access_policy}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy"></a>

```go
StorageSerializationPolicy *string
```

- *Type:* *string

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#storage_serialization_policy IcebergTable#storage_serialization_policy}

---

##### `TargetFileSize`<sup>Optional</sup> <a name="TargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize"></a>

```go
TargetFileSize *string
```

- *Type:* *string

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#target_file_size IcebergTable#target_file_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts"></a>

```go
Timeouts IcebergTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#timeouts IcebergTable#timeouts}

---

##### `UniqueConstraint`<sup>Optional</sup> <a name="UniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint"></a>

```go
UniqueConstraint interface{}
```

- *Type:* interface{}

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#unique_constraint IcebergTable#unique_constraint}

---

### IcebergTableDescribeOutput <a name="IcebergTableDescribeOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableDescribeOutput {

}
```


### IcebergTableForeignKeyConstraint <a name="IcebergTableForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableForeignKeyConstraint {
	Column: *[]*string,
	TableName: *string,
	Comment: *string,
	Deferrable: *string,
	Enable: *string,
	Enforced: *string,
	InitiallyDeferred: *string,
	Match: *string,
	Name: *string,
	OnDelete: *string,
	OnUpdate: *string,
	RefColumn: *[]*string,
	Rely: *string,
	Validate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column">Column</a></code> | <code>*[]*string</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName">TableName</a></code> | <code>*string</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment">Comment</a></code> | <code>*string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable">Deferrable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable">Enable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced">Enforced</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match">Match</a></code> | <code>*string</code> | The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL]. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name">Name</a></code> | <code>*string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete">OnDelete</a></code> | <code>*string</code> | Specifies the action to perform when the referenced primary/unique key is deleted. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate">OnUpdate</a></code> | <code>*string</code> | Specifies the action to perform when the referenced primary/unique key is updated. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn">RefColumn</a></code> | <code>*[]*string</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely">Rely</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate">Validate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column"></a>

```go
Column *[]*string
```

- *Type:* *[]*string

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#table_name IcebergTable#table_name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `Deferrable`<sup>Optional</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable"></a>

```go
Deferrable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable"></a>

```go
Enable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced"></a>

```go
Enforced *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `InitiallyDeferred`<sup>Optional</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred"></a>

```go
InitiallyDeferred *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match"></a>

```go
Match *string
```

- *Type:* *string

The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#match IcebergTable#match}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

Specifies the action to perform when the referenced primary/unique key is deleted.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on_delete IcebergTable#on_delete}

---

##### `OnUpdate`<sup>Optional</sup> <a name="OnUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate"></a>

```go
OnUpdate *string
```

- *Type:* *string

Specifies the action to perform when the referenced primary/unique key is updated.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on_update IcebergTable#on_update}

---

##### `RefColumn`<sup>Optional</sup> <a name="RefColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn"></a>

```go
RefColumn *[]*string
```

- *Type:* *[]*string

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#ref_column IcebergTable#ref_column}

---

##### `Rely`<sup>Optional</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely"></a>

```go
Rely *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableParameters <a name="IcebergTableParameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParameters {

}
```


### IcebergTableParametersCatalog <a name="IcebergTableParametersCatalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersCatalog {

}
```


### IcebergTableParametersCatalogSync <a name="IcebergTableParametersCatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersCatalogSync {

}
```


### IcebergTableParametersDataRetentionTimeInDays <a name="IcebergTableParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersDataRetentionTimeInDays {

}
```


### IcebergTableParametersEnableDataCompaction <a name="IcebergTableParametersEnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersEnableDataCompaction {

}
```


### IcebergTableParametersEnableIcebergMergeOnRead <a name="IcebergTableParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersEnableIcebergMergeOnRead {

}
```


### IcebergTableParametersExternalVolume <a name="IcebergTableParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersExternalVolume {

}
```


### IcebergTableParametersMaxDataExtensionTimeInDays <a name="IcebergTableParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersMaxDataExtensionTimeInDays {

}
```


### IcebergTableParametersStorageSerializationPolicy <a name="IcebergTableParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersStorageSerializationPolicy {

}
```


### IcebergTableParametersTargetFileSize <a name="IcebergTableParametersTargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableParametersTargetFileSize {

}
```


### IcebergTablePartitionBy <a name="IcebergTablePartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTablePartitionBy {
	Bucket: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTablePartitionByBucket,
	Day: *string,
	Hour: *string,
	Identity: *string,
	Month: *string,
	Truncate: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.icebergTable.IcebergTablePartitionByTruncate,
	Year: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket">Bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | bucket block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day">Day</a></code> | <code>*string</code> | Partitions the table by the day component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour">Hour</a></code> | <code>*string</code> | Partitions the table by the hour component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity">Identity</a></code> | <code>*string</code> | Name of the column to use as-is for partitioning. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month">Month</a></code> | <code>*string</code> | Partitions the table by the month component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate">Truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | truncate block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year">Year</a></code> | <code>*string</code> | Partitions the table by the year component of the column. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket"></a>

```go
Bucket IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#bucket IcebergTable#bucket}

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day"></a>

```go
Day *string
```

- *Type:* *string

Partitions the table by the day component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#day IcebergTable#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour"></a>

```go
Hour *string
```

- *Type:* *string

Partitions the table by the hour component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#hour IcebergTable#hour}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

Name of the column to use as-is for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#identity IcebergTable#identity}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month"></a>

```go
Month *string
```

- *Type:* *string

Partitions the table by the month component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#month IcebergTable#month}

---

##### `Truncate`<sup>Optional</sup> <a name="Truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate"></a>

```go
Truncate IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

truncate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#truncate IcebergTable#truncate}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year"></a>

```go
Year *string
```

- *Type:* *string

Partitions the table by the year component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#year IcebergTable#year}

---

### IcebergTablePartitionByBucket <a name="IcebergTablePartitionByBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTablePartitionByBucket {
	Column: *string,
	NumBuckets: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column">Column</a></code> | <code>*string</code> | Name of the column to bucket. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets">NumBuckets</a></code> | <code>*f64</code> | Number of buckets to hash the column values into. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column"></a>

```go
Column *string
```

- *Type:* *string

Name of the column to bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `NumBuckets`<sup>Required</sup> <a name="NumBuckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets"></a>

```go
NumBuckets *f64
```

- *Type:* *f64

Number of buckets to hash the column values into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#num_buckets IcebergTable#num_buckets}

---

### IcebergTablePartitionByTruncate <a name="IcebergTablePartitionByTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTablePartitionByTruncate {
	Column: *string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column">Column</a></code> | <code>*string</code> | Name of the column to truncate. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width">Width</a></code> | <code>*f64</code> | Width to truncate the column value to. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column"></a>

```go
Column *string
```

- *Type:* *string

Name of the column to truncate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Width to truncate the column value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#width IcebergTable#width}

---

### IcebergTablePrimaryKeyConstraint <a name="IcebergTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTablePrimaryKeyConstraint {
	Column: *[]*string,
	Comment: *string,
	Deferrable: *string,
	Enable: *string,
	Enforced: *string,
	InitiallyDeferred: *string,
	Name: *string,
	Rely: *string,
	Validate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column">Column</a></code> | <code>*[]*string</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment">Comment</a></code> | <code>*string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable">Deferrable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable">Enable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced">Enforced</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name">Name</a></code> | <code>*string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely">Rely</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate">Validate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column"></a>

```go
Column *[]*string
```

- *Type:* *[]*string

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `Deferrable`<sup>Optional</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable"></a>

```go
Deferrable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable"></a>

```go
Enable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced"></a>

```go
Enforced *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `InitiallyDeferred`<sup>Optional</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred"></a>

```go
InitiallyDeferred *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `Rely`<sup>Optional</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely"></a>

```go
Rely *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableRowAccessPolicy <a name="IcebergTableRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableRowAccessPolicy {
	On: *[]*string,
	PolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on">On</a></code> | <code>*[]*string</code> | Defines which columns are affected by the policy. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | Row access policy name. For more information about this resource, see [docs](./row_access_policy). |

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on"></a>

```go
On *[]*string
```

- *Type:* *[]*string

Defines which columns are affected by the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on IcebergTable#on}

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Row access policy name. For more information about this resource, see [docs](./row_access_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableShowOutput <a name="IcebergTableShowOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableShowOutput {

}
```


### IcebergTableShowOutputAutoRefreshStatus <a name="IcebergTableShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableShowOutputAutoRefreshStatus {

}
```


### IcebergTableShowOutputPartitionSpecs <a name="IcebergTableShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableShowOutputPartitionSpecs {

}
```


### IcebergTableShowOutputPartitionSpecsFields <a name="IcebergTableShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableShowOutputPartitionSpecsFields {

}
```


### IcebergTableTimeouts <a name="IcebergTableTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#create IcebergTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#delete IcebergTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#read IcebergTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#update IcebergTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#create IcebergTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#delete IcebergTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#read IcebergTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#update IcebergTable#update}.

---

### IcebergTableUniqueConstraint <a name="IcebergTableUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

&icebergtable.IcebergTableUniqueConstraint {
	Column: *[]*string,
	Comment: *string,
	Deferrable: *string,
	Enable: *string,
	Enforced: *string,
	InitiallyDeferred: *string,
	Name: *string,
	Rely: *string,
	Validate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column">Column</a></code> | <code>*[]*string</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment">Comment</a></code> | <code>*string</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable">Deferrable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable">Enable</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced">Enforced</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name">Name</a></code> | <code>*string</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely">Rely</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate">Validate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column"></a>

```go
Column *[]*string
```

- *Type:* *[]*string

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `Deferrable`<sup>Optional</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable"></a>

```go
Deferrable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable"></a>

```go
Enable *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced"></a>

```go
Enforced *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `InitiallyDeferred`<sup>Optional</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred"></a>

```go
InitiallyDeferred *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `Rely`<sup>Optional</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely"></a>

```go
Rely *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableAggregationPolicyOutputReference <a name="IcebergTableAggregationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableAggregationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableAggregationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey">ResetEntityKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityKey` <a name="ResetEntityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey"></a>

```go
func ResetEntityKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput">EntityKeyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey">EntityKey</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityKeyInput`<sup>Optional</sup> <a name="EntityKeyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput"></a>

```go
func EntityKeyInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `EntityKey`<sup>Required</sup> <a name="EntityKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey"></a>

```go
func EntityKey() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---


### IcebergTableCheckConstraintList <a name="IcebergTableCheckConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableCheckConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableCheckConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get"></a>

```go
func Get(index *f64) IcebergTableCheckConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableCheckConstraintOutputReference <a name="IcebergTableCheckConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableCheckConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableCheckConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate"></a>

```go
func ResetValidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableColumnDefaultOutputReference <a name="IcebergTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableColumnDefaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableColumnDefaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---


### IcebergTableColumnList <a name="IcebergTableColumnList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get"></a>

```go
func Get(index *f64) IcebergTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableColumnMaskingPolicyOutputReference <a name="IcebergTableColumnMaskingPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableColumnMaskingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableColumnMaskingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsing` <a name="ResetUsing" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing"></a>

```go
func ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput">UsingInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using">Using</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput"></a>

```go
func UsingInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using"></a>

```go
func Using() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---


### IcebergTableColumnOutputReference <a name="IcebergTableColumnOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault">PutDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy">PutMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy">PutProjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy">ResetMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull">ResetNotNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy">ResetProjectionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefault` <a name="PutDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault"></a>

```go
func PutDefault(value IcebergTableColumnDefault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---

##### `PutMaskingPolicy` <a name="PutMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy"></a>

```go
func PutMaskingPolicy(value IcebergTableColumnMaskingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---

##### `PutProjectionPolicy` <a name="PutProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy"></a>

```go
func PutProjectionPolicy(value IcebergTableColumnProjectionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetMaskingPolicy` <a name="ResetMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy"></a>

```go
func ResetMaskingPolicy()
```

##### `ResetNotNull` <a name="ResetNotNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull"></a>

```go
func ResetNotNull()
```

##### `ResetProjectionPolicy` <a name="ResetProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy"></a>

```go
func ResetProjectionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default">Default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy">MaskingPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy">ProjectionPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput">DefaultInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput">MaskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput">NotNullInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput">ProjectionPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull">NotNull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default"></a>

```go
func Default() IcebergTableColumnDefaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a>

---

##### `MaskingPolicy`<sup>Required</sup> <a name="MaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy"></a>

```go
func MaskingPolicy() IcebergTableColumnMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a>

---

##### `ProjectionPolicy`<sup>Required</sup> <a name="ProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy"></a>

```go
func ProjectionPolicy() IcebergTableColumnProjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput"></a>

```go
func DefaultInput() IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---

##### `MaskingPolicyInput`<sup>Optional</sup> <a name="MaskingPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput"></a>

```go
func MaskingPolicyInput() IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotNullInput`<sup>Optional</sup> <a name="NotNullInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput"></a>

```go
func NotNullInput() *string
```

- *Type:* *string

---

##### `ProjectionPolicyInput`<sup>Optional</sup> <a name="ProjectionPolicyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput"></a>

```go
func ProjectionPolicyInput() IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotNull`<sup>Required</sup> <a name="NotNull" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull"></a>

```go
func NotNull() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableColumnProjectionPolicyOutputReference <a name="IcebergTableColumnProjectionPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableColumnProjectionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableColumnProjectionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---


### IcebergTableDescribeOutputList <a name="IcebergTableDescribeOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get"></a>

```go
func Get(index *f64) IcebergTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableDescribeOutputOutputReference <a name="IcebergTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check">Check</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType">SourceIcebergType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault">WriteDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check"></a>

```go
func Check() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable"></a>

```go
func IsNullable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping"></a>

```go
func NameMapping() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain"></a>

```go
func PrivacyDomain() *string
```

- *Type:* *string

---

##### `SourceIcebergType`<sup>Required</sup> <a name="SourceIcebergType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType"></a>

```go
func SourceIcebergType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WriteDefault`<sup>Required</sup> <a name="WriteDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault"></a>

```go
func WriteDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a>

---


### IcebergTableForeignKeyConstraintList <a name="IcebergTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableForeignKeyConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableForeignKeyConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get"></a>

```go
func Get(index *f64) IcebergTableForeignKeyConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableForeignKeyConstraintOutputReference <a name="IcebergTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableForeignKeyConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableForeignKeyConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable">ResetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred">ResetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate">ResetOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn">ResetRefColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely">ResetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDeferrable` <a name="ResetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable"></a>

```go
func ResetDeferrable()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced"></a>

```go
func ResetEnforced()
```

##### `ResetInitiallyDeferred` <a name="ResetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```go
func ResetInitiallyDeferred()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetOnUpdate` <a name="ResetOnUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate"></a>

```go
func ResetOnUpdate()
```

##### `ResetRefColumn` <a name="ResetRefColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn"></a>

```go
func ResetRefColumn()
```

##### `ResetRely` <a name="ResetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely"></a>

```go
func ResetRely()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate"></a>

```go
func ResetValidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput">ColumnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput">DeferrableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput">EnableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput">InitiallyDeferredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput">OnUpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput">RefColumnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput">RelyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column">Column</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable">Deferrable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable">Enable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced">Enforced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate">OnUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn">RefColumn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely">Rely</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput"></a>

```go
func ColumnInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DeferrableInput`<sup>Optional</sup> <a name="DeferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput"></a>

```go
func DeferrableInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput"></a>

```go
func EnableInput() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() *string
```

- *Type:* *string

---

##### `InitiallyDeferredInput`<sup>Optional</sup> <a name="InitiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```go
func InitiallyDeferredInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `OnUpdateInput`<sup>Optional</sup> <a name="OnUpdateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput"></a>

```go
func OnUpdateInput() *string
```

- *Type:* *string

---

##### `RefColumnInput`<sup>Optional</sup> <a name="RefColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput"></a>

```go
func RefColumnInput() *[]*string
```

- *Type:* *[]*string

---

##### `RelyInput`<sup>Optional</sup> <a name="RelyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput"></a>

```go
func RelyInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column"></a>

```go
func Column() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deferrable`<sup>Required</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable"></a>

```go
func Deferrable() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable"></a>

```go
func Enable() *string
```

- *Type:* *string

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced"></a>

```go
func Enforced() *string
```

- *Type:* *string

---

##### `InitiallyDeferred`<sup>Required</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred"></a>

```go
func InitiallyDeferred() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `OnUpdate`<sup>Required</sup> <a name="OnUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate"></a>

```go
func OnUpdate() *string
```

- *Type:* *string

---

##### `RefColumn`<sup>Required</sup> <a name="RefColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn"></a>

```go
func RefColumn() *[]*string
```

- *Type:* *[]*string

---

##### `Rely`<sup>Required</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely"></a>

```go
func Rely() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableParametersCatalogList <a name="IcebergTableParametersCatalogList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersCatalogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersCatalogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get"></a>

```go
func Get(index *f64) IcebergTableParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersCatalogOutputReference <a name="IcebergTableParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a>

---


### IcebergTableParametersCatalogSyncList <a name="IcebergTableParametersCatalogSyncList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersCatalogSyncList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersCatalogSyncList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get"></a>

```go
func Get(index *f64) IcebergTableParametersCatalogSyncOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersCatalogSyncOutputReference <a name="IcebergTableParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersCatalogSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersCatalogSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersCatalogSync
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a>

---


### IcebergTableParametersDataRetentionTimeInDaysList <a name="IcebergTableParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersDataRetentionTimeInDaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersDataRetentionTimeInDaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get"></a>

```go
func Get(index *f64) IcebergTableParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersDataRetentionTimeInDaysOutputReference <a name="IcebergTableParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersDataRetentionTimeInDaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersDataRetentionTimeInDaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a>

---


### IcebergTableParametersEnableDataCompactionList <a name="IcebergTableParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersEnableDataCompactionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersEnableDataCompactionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get"></a>

```go
func Get(index *f64) IcebergTableParametersEnableDataCompactionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersEnableDataCompactionOutputReference <a name="IcebergTableParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersEnableDataCompactionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersEnableDataCompactionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersEnableDataCompaction
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a>

---


### IcebergTableParametersEnableIcebergMergeOnReadList <a name="IcebergTableParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersEnableIcebergMergeOnReadList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersEnableIcebergMergeOnReadList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get"></a>

```go
func Get(index *f64) IcebergTableParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersEnableIcebergMergeOnReadOutputReference <a name="IcebergTableParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersEnableIcebergMergeOnReadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersEnableIcebergMergeOnReadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersEnableIcebergMergeOnRead
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a>

---


### IcebergTableParametersExternalVolumeList <a name="IcebergTableParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersExternalVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersExternalVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get"></a>

```go
func Get(index *f64) IcebergTableParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersExternalVolumeOutputReference <a name="IcebergTableParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersExternalVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersExternalVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a>

---


### IcebergTableParametersList <a name="IcebergTableParametersList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get"></a>

```go
func Get(index *f64) IcebergTableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersMaxDataExtensionTimeInDaysList <a name="IcebergTableParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersMaxDataExtensionTimeInDaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersMaxDataExtensionTimeInDaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get"></a>

```go
func Get(index *f64) IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference <a name="IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersMaxDataExtensionTimeInDaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a>

---


### IcebergTableParametersOutputReference <a name="IcebergTableParametersOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync">CatalogSync</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction">EnableDataCompaction</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead">EnableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume">ExternalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize">TargetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog"></a>

```go
func Catalog() IcebergTableParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a>

---

##### `CatalogSync`<sup>Required</sup> <a name="CatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync"></a>

```go
func CatalogSync() IcebergTableParametersCatalogSyncList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a>

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() IcebergTableParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a>

---

##### `EnableDataCompaction`<sup>Required</sup> <a name="EnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction"></a>

```go
func EnableDataCompaction() IcebergTableParametersEnableDataCompactionList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a>

---

##### `EnableIcebergMergeOnRead`<sup>Required</sup> <a name="EnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```go
func EnableIcebergMergeOnRead() IcebergTableParametersEnableIcebergMergeOnReadList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a>

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume"></a>

```go
func ExternalVolume() IcebergTableParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a>

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() IcebergTableParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a>

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() IcebergTableParametersStorageSerializationPolicyList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a>

---

##### `TargetFileSize`<sup>Required</sup> <a name="TargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize"></a>

```go
func TargetFileSize() IcebergTableParametersTargetFileSizeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a>

---


### IcebergTableParametersStorageSerializationPolicyList <a name="IcebergTableParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersStorageSerializationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersStorageSerializationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get"></a>

```go
func Get(index *f64) IcebergTableParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersStorageSerializationPolicyOutputReference <a name="IcebergTableParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersStorageSerializationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersStorageSerializationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersStorageSerializationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a>

---


### IcebergTableParametersTargetFileSizeList <a name="IcebergTableParametersTargetFileSizeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersTargetFileSizeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableParametersTargetFileSizeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get"></a>

```go
func Get(index *f64) IcebergTableParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableParametersTargetFileSizeOutputReference <a name="IcebergTableParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableParametersTargetFileSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableParametersTargetFileSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableParametersTargetFileSize
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a>

---


### IcebergTablePartitionByBucketOutputReference <a name="IcebergTablePartitionByBucketOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTablePartitionByBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTablePartitionByBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput">NumBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets">NumBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `NumBucketsInput`<sup>Optional</sup> <a name="NumBucketsInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput"></a>

```go
func NumBucketsInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `NumBuckets`<sup>Required</sup> <a name="NumBuckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets"></a>

```go
func NumBuckets() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---


### IcebergTablePartitionByList <a name="IcebergTablePartitionByList" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTablePartitionByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTablePartitionByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get"></a>

```go
func Get(index *f64) IcebergTablePartitionByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTablePartitionByOutputReference <a name="IcebergTablePartitionByOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTablePartitionByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTablePartitionByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket">PutBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate">PutTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate">ResetTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBucket` <a name="PutBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket"></a>

```go
func PutBucket(value IcebergTablePartitionByBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---

##### `PutTruncate` <a name="PutTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate"></a>

```go
func PutTruncate(value IcebergTablePartitionByTruncate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetTruncate` <a name="ResetTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate"></a>

```go
func ResetTruncate()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket">Bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate">Truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput">BucketInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput">HourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput">MonthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput">TruncateInput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput">YearInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour">Hour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month">Month</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year">Year</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket"></a>

```go
func Bucket() IcebergTablePartitionByBucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a>

---

##### `Truncate`<sup>Required</sup> <a name="Truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate"></a>

```go
func Truncate() IcebergTablePartitionByTruncateOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput"></a>

```go
func BucketInput() IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput"></a>

```go
func HourInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput"></a>

```go
func MonthInput() *string
```

- *Type:* *string

---

##### `TruncateInput`<sup>Optional</sup> <a name="TruncateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput"></a>

```go
func TruncateInput() IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput"></a>

```go
func YearInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour"></a>

```go
func Hour() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month"></a>

```go
func Month() *string
```

- *Type:* *string

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year"></a>

```go
func Year() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTablePartitionByTruncateOutputReference <a name="IcebergTablePartitionByTruncateOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTablePartitionByTruncateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTablePartitionByTruncateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---


### IcebergTablePrimaryKeyConstraintOutputReference <a name="IcebergTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTablePrimaryKeyConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTablePrimaryKeyConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable">ResetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred">ResetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely">ResetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDeferrable` <a name="ResetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable"></a>

```go
func ResetDeferrable()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced"></a>

```go
func ResetEnforced()
```

##### `ResetInitiallyDeferred` <a name="ResetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```go
func ResetInitiallyDeferred()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRely` <a name="ResetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely"></a>

```go
func ResetRely()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate"></a>

```go
func ResetValidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput">ColumnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput">DeferrableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput">EnableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput">InitiallyDeferredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput">RelyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column">Column</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable">Deferrable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable">Enable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced">Enforced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely">Rely</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput"></a>

```go
func ColumnInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DeferrableInput`<sup>Optional</sup> <a name="DeferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput"></a>

```go
func DeferrableInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput"></a>

```go
func EnableInput() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() *string
```

- *Type:* *string

---

##### `InitiallyDeferredInput`<sup>Optional</sup> <a name="InitiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```go
func InitiallyDeferredInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelyInput`<sup>Optional</sup> <a name="RelyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput"></a>

```go
func RelyInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column"></a>

```go
func Column() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deferrable`<sup>Required</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable"></a>

```go
func Deferrable() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable"></a>

```go
func Enable() *string
```

- *Type:* *string

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced"></a>

```go
func Enforced() *string
```

- *Type:* *string

---

##### `InitiallyDeferred`<sup>Required</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred"></a>

```go
func InitiallyDeferred() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rely`<sup>Required</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely"></a>

```go
func Rely() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---


### IcebergTableRowAccessPolicyOutputReference <a name="IcebergTableRowAccessPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableRowAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableRowAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput">OnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on">On</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput"></a>

```go
func OnInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on"></a>

```go
func On() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---


### IcebergTableShowOutputAutoRefreshStatusList <a name="IcebergTableShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputAutoRefreshStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableShowOutputAutoRefreshStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get"></a>

```go
func Get(index *f64) IcebergTableShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputAutoRefreshStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableShowOutputAutoRefreshStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">CurrentSnapshotId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState">ExecutionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">LastSnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">PendingSnapshotCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentSnapshotId`<sup>Required</sup> <a name="CurrentSnapshotId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```go
func CurrentSnapshotId() *f64
```

- *Type:* *f64

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```go
func ExecutionState() *string
```

- *Type:* *string

---

##### `LastSnapshotTime`<sup>Required</sup> <a name="LastSnapshotTime" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```go
func LastSnapshotTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `PendingSnapshotCount`<sup>Required</sup> <a name="PendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```go
func PendingSnapshotCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a>

---


### IcebergTableShowOutputList <a name="IcebergTableShowOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get"></a>

```go
func Get(index *f64) IcebergTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableShowOutputOutputReference <a name="IcebergTableShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus">AutoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation">BaseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata">CanWriteMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName">CatalogSyncName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName">CatalogTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId">CurrentPartitionSpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName">ExternalVolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion">IcebergTableFormatVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType">IcebergTableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs">PartitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshStatus`<sup>Required</sup> <a name="AutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus"></a>

```go
func AutoRefreshStatus() IcebergTableShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a>

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation"></a>

```go
func BaseLocation() *string
```

- *Type:* *string

---

##### `CanWriteMetadata`<sup>Required</sup> <a name="CanWriteMetadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata"></a>

```go
func CanWriteMetadata() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogSyncName`<sup>Required</sup> <a name="CatalogSyncName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName"></a>

```go
func CatalogSyncName() *string
```

- *Type:* *string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName"></a>

```go
func CatalogTableName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CurrentPartitionSpecId`<sup>Required</sup> <a name="CurrentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId"></a>

```go
func CurrentPartitionSpecId() *f64
```

- *Type:* *f64

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ExternalVolumeName`<sup>Required</sup> <a name="ExternalVolumeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName"></a>

```go
func ExternalVolumeName() *string
```

- *Type:* *string

---

##### `IcebergTableFormatVersion`<sup>Required</sup> <a name="IcebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```go
func IcebergTableFormatVersion() *f64
```

- *Type:* *f64

---

##### `IcebergTableType`<sup>Required</sup> <a name="IcebergTableType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType"></a>

```go
func IcebergTableType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping"></a>

```go
func NameMapping() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `PartitionSpecs`<sup>Required</sup> <a name="PartitionSpecs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs"></a>

```go
func PartitionSpecs() IcebergTableShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a>

---


### IcebergTableShowOutputPartitionSpecsFieldsList <a name="IcebergTableShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputPartitionSpecsFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableShowOutputPartitionSpecsFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get"></a>

```go
func Get(index *f64) IcebergTableShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputPartitionSpecsFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableShowOutputPartitionSpecsFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a>

---


### IcebergTableShowOutputPartitionSpecsList <a name="IcebergTableShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputPartitionSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableShowOutputPartitionSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get"></a>

```go
func Get(index *f64) IcebergTableShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableShowOutputPartitionSpecsOutputReference <a name="IcebergTableShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableShowOutputPartitionSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableShowOutputPartitionSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields"></a>

```go
func Fields() IcebergTableShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a>

---


### IcebergTableTimeoutsOutputReference <a name="IcebergTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableUniqueConstraintList <a name="IcebergTableUniqueConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableUniqueConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableUniqueConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get"></a>

```go
func Get(index *f64) IcebergTableUniqueConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IcebergTableUniqueConstraintOutputReference <a name="IcebergTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/icebergtable"

icebergtable.NewIcebergTableUniqueConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableUniqueConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable">ResetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred">ResetInitiallyDeferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely">ResetRely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDeferrable` <a name="ResetDeferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable"></a>

```go
func ResetDeferrable()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced"></a>

```go
func ResetEnforced()
```

##### `ResetInitiallyDeferred` <a name="ResetInitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred"></a>

```go
func ResetInitiallyDeferred()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRely` <a name="ResetRely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely"></a>

```go
func ResetRely()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate"></a>

```go
func ResetValidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput">ColumnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput">DeferrableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput">EnableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput">InitiallyDeferredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput">RelyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column">Column</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable">Deferrable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable">Enable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced">Enforced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred">InitiallyDeferred</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely">Rely</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput"></a>

```go
func ColumnInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DeferrableInput`<sup>Optional</sup> <a name="DeferrableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput"></a>

```go
func DeferrableInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput"></a>

```go
func EnableInput() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() *string
```

- *Type:* *string

---

##### `InitiallyDeferredInput`<sup>Optional</sup> <a name="InitiallyDeferredInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput"></a>

```go
func InitiallyDeferredInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelyInput`<sup>Optional</sup> <a name="RelyInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput"></a>

```go
func RelyInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column"></a>

```go
func Column() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deferrable`<sup>Required</sup> <a name="Deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable"></a>

```go
func Deferrable() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable"></a>

```go
func Enable() *string
```

- *Type:* *string

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced"></a>

```go
func Enforced() *string
```

- *Type:* *string

---

##### `InitiallyDeferred`<sup>Required</sup> <a name="InitiallyDeferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred"></a>

```go
func InitiallyDeferred() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rely`<sup>Required</sup> <a name="Rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely"></a>

```go
func Rely() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



