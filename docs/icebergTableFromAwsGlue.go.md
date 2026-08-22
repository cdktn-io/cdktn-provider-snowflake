# `icebergTableFromAwsGlue` Submodule <a name="`icebergTableFromAwsGlue` Submodule" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromAwsGlue <a name="IcebergTableFromAwsGlue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue snowflake_iceberg_table_from_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlue(scope Construct, id *string, config IcebergTableFromAwsGlueConfig) IcebergTableFromAwsGlue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig">IcebergTableFromAwsGlueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig">IcebergTableFromAwsGlueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace">ResetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts"></a>

```go
func PutTimeouts(value IcebergTableFromAwsGlueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh"></a>

```go
func ResetAutoRefresh()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCatalogNamespace` <a name="ResetCatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace"></a>

```go
func ResetCatalogNamespace()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment"></a>

```go
func ResetComment()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId"></a>

```go
func ResetId()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.IcebergTableFromAwsGlue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.IcebergTableFromAwsGlue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.IcebergTableFromAwsGlue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.IcebergTableFromAwsGlue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IcebergTableFromAwsGlue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IcebergTableFromAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput">CatalogNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput">CatalogTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName">CatalogTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput"></a>

```go
func DescribeOutput() IcebergTableFromAwsGlueDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters"></a>

```go
func Parameters() IcebergTableFromAwsGlueParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput"></a>

```go
func ShowOutput() IcebergTableFromAwsGlueShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts"></a>

```go
func Timeouts() IcebergTableFromAwsGlueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a>

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CatalogNamespaceInput`<sup>Optional</sup> <a name="CatalogNamespaceInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput"></a>

```go
func CatalogNamespaceInput() *string
```

- *Type:* *string

---

##### `CatalogTableNameInput`<sup>Optional</sup> <a name="CatalogTableNameInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput"></a>

```go
func CatalogTableNameInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName"></a>

```go
func CatalogTableName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromAwsGlueConfig <a name="IcebergTableFromAwsGlueConfig" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogTableName: *string,
	Database: *string,
	Name: *string,
	Schema: *string,
	AutoRefresh: *string,
	Catalog: *string,
	CatalogNamespace: *string,
	Comment: *string,
	ExternalVolume: *string,
	Id: *string,
	ReplaceInvalidCharacters: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName">CatalogTableName</a></code> | <code>*string</code> | Specifies the name of the table as it appears in the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName"></a>

```go
CatalogTableName *string
```

- *Type:* *string

Specifies the name of the table as it appears in the AWS Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog_table_name IcebergTableFromAwsGlue#catalog_table_name}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#database IcebergTableFromAwsGlue#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#name IcebergTableFromAwsGlue#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#schema IcebergTableFromAwsGlue#schema}

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#auto_refresh IcebergTableFromAwsGlue#auto_refresh}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog IcebergTableFromAwsGlue#catalog}

---

##### `CatalogNamespace`<sup>Optional</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace"></a>

```go
CatalogNamespace *string
```

- *Type:* *string

Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog_namespace IcebergTableFromAwsGlue#catalog_namespace}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#comment IcebergTableFromAwsGlue#comment}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#external_volume IcebergTableFromAwsGlue#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#replace_invalid_characters IcebergTableFromAwsGlue#replace_invalid_characters}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts"></a>

```go
Timeouts IcebergTableFromAwsGlueTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#timeouts IcebergTableFromAwsGlue#timeouts}

---

### IcebergTableFromAwsGlueDescribeOutput <a name="IcebergTableFromAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueDescribeOutput {

}
```


### IcebergTableFromAwsGlueParameters <a name="IcebergTableFromAwsGlueParameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueParameters {

}
```


### IcebergTableFromAwsGlueParametersCatalog <a name="IcebergTableFromAwsGlueParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueParametersCatalog {

}
```


### IcebergTableFromAwsGlueParametersExternalVolume <a name="IcebergTableFromAwsGlueParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueParametersExternalVolume {

}
```


### IcebergTableFromAwsGlueParametersReplaceInvalidCharacters <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters {

}
```


### IcebergTableFromAwsGlueShowOutput <a name="IcebergTableFromAwsGlueShowOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueShowOutput {

}
```


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatus <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus {

}
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecs <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueShowOutputPartitionSpecs {

}
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFields <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields {

}
```


### IcebergTableFromAwsGlueTimeouts <a name="IcebergTableFromAwsGlueTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

&icebergtablefromawsglue.IcebergTableFromAwsGlueTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromAwsGlueDescribeOutputList <a name="IcebergTableFromAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueDescribeOutputOutputReference <a name="IcebergTableFromAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check">Check</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType">SourceIcebergType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault">WriteDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check"></a>

```go
func Check() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable"></a>

```go
func IsNullable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping"></a>

```go
func NameMapping() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain"></a>

```go
func PrivacyDomain() *string
```

- *Type:* *string

---

##### `SourceIcebergType`<sup>Required</sup> <a name="SourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType"></a>

```go
func SourceIcebergType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WriteDefault`<sup>Required</sup> <a name="WriteDefault" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault"></a>

```go
func WriteDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a>

---


### IcebergTableFromAwsGlueParametersCatalogList <a name="IcebergTableFromAwsGlueParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersCatalogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueParametersCatalogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueParametersCatalogOutputReference <a name="IcebergTableFromAwsGlueParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueParametersCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a>

---


### IcebergTableFromAwsGlueParametersExternalVolumeList <a name="IcebergTableFromAwsGlueParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersExternalVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueParametersExternalVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueParametersExternalVolumeOutputReference <a name="IcebergTableFromAwsGlueParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersExternalVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueParametersExternalVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a>

---


### IcebergTableFromAwsGlueParametersList <a name="IcebergTableFromAwsGlueParametersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueParametersOutputReference <a name="IcebergTableFromAwsGlueParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume">ExternalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog"></a>

```go
func Catalog() IcebergTableFromAwsGlueParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a>

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume"></a>

```go
func ExternalVolume() IcebergTableFromAwsGlueParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a>

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a>

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersReplaceInvalidCharactersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputAutoRefreshStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">CurrentSnapshotId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState">ExecutionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">LastSnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">PendingSnapshotCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentSnapshotId`<sup>Required</sup> <a name="CurrentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```go
func CurrentSnapshotId() *f64
```

- *Type:* *f64

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```go
func ExecutionState() *string
```

- *Type:* *string

---

##### `LastSnapshotTime`<sup>Required</sup> <a name="LastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```go
func LastSnapshotTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `PendingSnapshotCount`<sup>Required</sup> <a name="PendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```go
func PendingSnapshotCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromAwsGlueShowOutputList <a name="IcebergTableFromAwsGlueShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueShowOutputOutputReference <a name="IcebergTableFromAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus">AutoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation">BaseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata">CanWriteMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName">CatalogSyncName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName">CatalogTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId">CurrentPartitionSpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName">ExternalVolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion">IcebergTableFormatVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType">IcebergTableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs">PartitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshStatus`<sup>Required</sup> <a name="AutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus"></a>

```go
func AutoRefreshStatus() IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a>

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation"></a>

```go
func BaseLocation() *string
```

- *Type:* *string

---

##### `CanWriteMetadata`<sup>Required</sup> <a name="CanWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata"></a>

```go
func CanWriteMetadata() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogSyncName`<sup>Required</sup> <a name="CatalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName"></a>

```go
func CatalogSyncName() *string
```

- *Type:* *string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName"></a>

```go
func CatalogTableName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CurrentPartitionSpecId`<sup>Required</sup> <a name="CurrentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId"></a>

```go
func CurrentPartitionSpecId() *f64
```

- *Type:* *f64

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ExternalVolumeName`<sup>Required</sup> <a name="ExternalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName"></a>

```go
func ExternalVolumeName() *string
```

- *Type:* *string

---

##### `IcebergTableFormatVersion`<sup>Required</sup> <a name="IcebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```go
func IcebergTableFormatVersion() *f64
```

- *Type:* *f64

---

##### `IcebergTableType`<sup>Required</sup> <a name="IcebergTableType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType"></a>

```go
func IcebergTableType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping"></a>

```go
func NameMapping() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `PartitionSpecs`<sup>Required</sup> <a name="PartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs"></a>

```go
func PartitionSpecs() IcebergTableFromAwsGlueShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputPartitionSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IcebergTableFromAwsGlueShowOutputPartitionSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get"></a>

```go
func Get(index *f64) IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields"></a>

```go
func Fields() IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() IcebergTableFromAwsGlueShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a>

---


### IcebergTableFromAwsGlueTimeoutsOutputReference <a name="IcebergTableFromAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/icebergtablefromawsglue"

icebergtablefromawsglue.NewIcebergTableFromAwsGlueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IcebergTableFromAwsGlueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



