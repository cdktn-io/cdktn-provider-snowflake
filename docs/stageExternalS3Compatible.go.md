# `stageExternalS3Compatible` Submodule <a name="`stageExternalS3Compatible` Submodule" id="@cdktn/provider-snowflake.stageExternalS3Compatible"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalS3Compatible <a name="StageExternalS3Compatible" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible snowflake_stage_external_s3_compatible}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3Compatible(scope Construct, id *string, config StageExternalS3CompatibleConfig) StageExternalS3Compatible
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig">StageExternalS3CompatibleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig">StageExternalS3CompatibleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory">PutDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat">PutFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials"></a>

```go
func PutCredentials(value StageExternalS3CompatibleCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---

##### `PutDirectory` <a name="PutDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory"></a>

```go
func PutDirectory(value StageExternalS3CompatibleDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---

##### `PutFileFormat` <a name="PutFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat"></a>

```go
func PutFileFormat(value StageExternalS3CompatibleFileFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts"></a>

```go
func PutTimeouts(value StageExternalS3CompatibleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.StageExternalS3Compatible_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.StageExternalS3Compatible_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.StageExternalS3Compatible_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.StageExternalS3Compatible_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StageExternalS3Compatible to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StageExternalS3Compatible that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalS3Compatible to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType">StageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput">DirectoryInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput">FileFormatInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials"></a>

```go
func Credentials() StageExternalS3CompatibleCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput"></a>

```go
func DescribeOutput() StageExternalS3CompatibleDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a>

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory"></a>

```go
func Directory() StageExternalS3CompatibleDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat"></a>

```go
func FileFormat() StageExternalS3CompatibleFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput"></a>

```go
func ShowOutput() StageExternalS3CompatibleShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a>

---

##### `StageType`<sup>Required</sup> <a name="StageType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType"></a>

```go
func StageType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts"></a>

```go
func Timeouts() StageExternalS3CompatibleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput"></a>

```go
func CredentialsInput() StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput"></a>

```go
func DirectoryInput() StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput"></a>

```go
func FileFormatInput() StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalS3CompatibleConfig <a name="StageExternalS3CompatibleConfig" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Endpoint: *string,
	Name: *string,
	Schema: *string,
	Url: *string,
	Comment: *string,
	Credentials: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleCredentials,
	Directory: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleDirectory,
	FileFormat: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Specifies the endpoint for the S3-compatible storage provider. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url">Url</a></code> | <code>*string</code> | Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#database StageExternalS3Compatible#database}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Specifies the endpoint for the S3-compatible storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#endpoint StageExternalS3Compatible#endpoint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#name StageExternalS3Compatible#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#schema StageExternalS3Compatible#schema}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#url StageExternalS3Compatible#url}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#comment StageExternalS3Compatible#comment}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials"></a>

```go
Credentials StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#credentials StageExternalS3Compatible#credentials}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory"></a>

```go
Directory StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#directory StageExternalS3Compatible#directory}

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat"></a>

```go
FileFormat StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_format StageExternalS3Compatible#file_format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts"></a>

```go
Timeouts StageExternalS3CompatibleTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timeouts StageExternalS3Compatible#timeouts}

---

### StageExternalS3CompatibleCredentials <a name="StageExternalS3CompatibleCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleCredentials {
	AwsKeyId: *string,
	AwsSecretKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId">AwsKeyId</a></code> | <code>*string</code> | Specifies the AWS access key ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey">AwsSecretKey</a></code> | <code>*string</code> | Specifies the AWS secret access key. |

---

##### `AwsKeyId`<sup>Required</sup> <a name="AwsKeyId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId"></a>

```go
AwsKeyId *string
```

- *Type:* *string

Specifies the AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#aws_key_id StageExternalS3Compatible#aws_key_id}

---

##### `AwsSecretKey`<sup>Required</sup> <a name="AwsSecretKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey"></a>

```go
AwsSecretKey *string
```

- *Type:* *string

Specifies the AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#aws_secret_key StageExternalS3Compatible#aws_secret_key}

---

### StageExternalS3CompatibleDescribeOutput <a name="StageExternalS3CompatibleDescribeOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutput {

}
```


### StageExternalS3CompatibleDescribeOutputDirectoryTable <a name="StageExternalS3CompatibleDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormat <a name="StageExternalS3CompatibleDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormat {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatAvro <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatCsv <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatJson <a name="StageExternalS3CompatibleDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatOrc <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatParquet <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet {

}
```


### StageExternalS3CompatibleDescribeOutputFileFormatXml <a name="StageExternalS3CompatibleDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml {

}
```


### StageExternalS3CompatibleDescribeOutputLocation <a name="StageExternalS3CompatibleDescribeOutputLocation" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDescribeOutputLocation {

}
```


### StageExternalS3CompatibleDirectory <a name="StageExternalS3CompatibleDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleDirectory {
	Enable: interface{},
	AutoRefresh: *string,
	RefreshOnCreate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable">Enable</a></code> | <code>interface{}</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate">RefreshOnCreate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#enable StageExternalS3Compatible#enable}

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#auto_refresh StageExternalS3Compatible#auto_refresh}

---

##### `RefreshOnCreate`<sup>Optional</sup> <a name="RefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate"></a>

```go
RefreshOnCreate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#refresh_on_create StageExternalS3Compatible#refresh_on_create}

---

### StageExternalS3CompatibleFileFormat <a name="StageExternalS3CompatibleFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormat {
	Avro: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro,
	Csv: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv,
	FormatName: *string,
	Json: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson,
	Orc: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc,
	Parquet: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet,
	Xml: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName">FormatName</a></code> | <code>*string</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | xml block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro"></a>

```go
Avro StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#avro StageExternalS3Compatible#avro}

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv"></a>

```go
Csv StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#csv StageExternalS3Compatible#csv}

---

##### `FormatName`<sup>Optional</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName"></a>

```go
FormatName *string
```

- *Type:* *string

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#format_name StageExternalS3Compatible#format_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json"></a>

```go
Json StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#json StageExternalS3Compatible#json}

---

##### `Orc`<sup>Optional</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc"></a>

```go
Orc StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#orc StageExternalS3Compatible#orc}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet"></a>

```go
Parquet StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#parquet StageExternalS3Compatible#parquet}

---

##### `Xml`<sup>Optional</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml"></a>

```go
Xml StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#xml StageExternalS3Compatible#xml}

---

### StageExternalS3CompatibleFileFormatAvro <a name="StageExternalS3CompatibleFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatAvro {
	Compression: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatCsv <a name="StageExternalS3CompatibleFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatCsv {
	BinaryFormat: *string,
	Compression: *string,
	DateFormat: *string,
	EmptyFieldAsNull: *string,
	Encoding: *string,
	ErrorOnColumnCountMismatch: *string,
	Escape: *string,
	EscapeUnenclosedField: *string,
	FieldDelimiter: *string,
	FieldOptionallyEnclosedBy: *string,
	FileExtension: *string,
	MultiLine: *string,
	NullIf: *[]*string,
	ParseHeader: *string,
	RecordDelimiter: *string,
	ReplaceInvalidCharacters: *string,
	SkipBlankLines: *string,
	SkipByteOrderMark: *string,
	SkipHeader: *f64,
	TimeFormat: *string,
	TimestampFormat: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding">Encoding</a></code> | <code>*string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape">Escape</a></code> | <code>*string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull"></a>

```go
EmptyFieldAsNull *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#empty_field_as_null StageExternalS3Compatible#empty_field_as_null}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#encoding StageExternalS3Compatible#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```go
ErrorOnColumnCountMismatch *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#error_on_column_count_mismatch StageExternalS3Compatible#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape"></a>

```go
Escape *string
```

- *Type:* *string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#escape StageExternalS3Compatible#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField"></a>

```go
EscapeUnenclosedField *string
```

- *Type:* *string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#escape_unenclosed_field StageExternalS3Compatible#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#field_delimiter StageExternalS3Compatible#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```go
FieldOptionallyEnclosedBy *string
```

- *Type:* *string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#field_optionally_enclosed_by StageExternalS3Compatible#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `ParseHeader`<sup>Optional</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader"></a>

```go
ParseHeader *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#parse_header StageExternalS3Compatible#parse_header}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#record_delimiter StageExternalS3Compatible#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines"></a>

```go
SkipBlankLines *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_blank_lines StageExternalS3Compatible#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader"></a>

```go
SkipHeader *f64
```

- *Type:* *f64

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_header StageExternalS3Compatible#skip_header}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatJson <a name="StageExternalS3CompatibleFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatJson {
	AllowDuplicate: *string,
	BinaryFormat: *string,
	Compression: *string,
	DateFormat: *string,
	EnableOctal: *string,
	FileExtension: *string,
	IgnoreUtf8Errors: *string,
	MultiLine: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	SkipByteOrderMark: *string,
	StripNullValues: *string,
	StripOuterArray: *string,
	TimeFormat: *string,
	TimestampFormat: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate"></a>

```go
AllowDuplicate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#allow_duplicate StageExternalS3Compatible#allow_duplicate}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal"></a>

```go
EnableOctal *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#enable_octal StageExternalS3Compatible#enable_octal}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues"></a>

```go
StripNullValues *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_null_values StageExternalS3Compatible#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray"></a>

```go
StripOuterArray *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_outer_array StageExternalS3Compatible#strip_outer_array}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatOrc <a name="StageExternalS3CompatibleFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatOrc {
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatParquet <a name="StageExternalS3CompatibleFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatParquet {
	BinaryAsText: *string,
	Compression: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
	UseLogicalType: *string,
	UseVectorizedScanner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `BinaryAsText`<sup>Optional</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText"></a>

```go
BinaryAsText *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#binary_as_text StageExternalS3Compatible#binary_as_text}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `UseLogicalType`<sup>Optional</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType"></a>

```go
UseLogicalType *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#use_logical_type StageExternalS3Compatible#use_logical_type}

---

##### `UseVectorizedScanner`<sup>Optional</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner"></a>

```go
UseVectorizedScanner *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#use_vectorized_scanner StageExternalS3Compatible#use_vectorized_scanner}

---

### StageExternalS3CompatibleFileFormatXml <a name="StageExternalS3CompatibleFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleFileFormatXml {
	Compression: *string,
	DisableAutoConvert: *string,
	IgnoreUtf8Errors: *string,
	PreserveSpace: *string,
	ReplaceInvalidCharacters: *string,
	SkipByteOrderMark: *string,
	StripOuterElement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `DisableAutoConvert`<sup>Optional</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert"></a>

```go
DisableAutoConvert *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#disable_auto_convert StageExternalS3Compatible#disable_auto_convert}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `PreserveSpace`<sup>Optional</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace"></a>

```go
PreserveSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#preserve_space StageExternalS3Compatible#preserve_space}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `StripOuterElement`<sup>Optional</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement"></a>

```go
StripOuterElement *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#strip_outer_element StageExternalS3Compatible#strip_outer_element}

---

### StageExternalS3CompatibleShowOutput <a name="StageExternalS3CompatibleShowOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleShowOutput {

}
```


### StageExternalS3CompatibleTimeouts <a name="StageExternalS3CompatibleTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

&stageexternals3compatible.StageExternalS3CompatibleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalS3CompatibleCredentialsOutputReference <a name="StageExternalS3CompatibleCredentialsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput">AwsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput">AwsSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId">AwsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey">AwsSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsKeyIdInput`<sup>Optional</sup> <a name="AwsKeyIdInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput"></a>

```go
func AwsKeyIdInput() *string
```

- *Type:* *string

---

##### `AwsSecretKeyInput`<sup>Optional</sup> <a name="AwsSecretKeyInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput"></a>

```go
func AwsSecretKeyInput() *string
```

- *Type:* *string

---

##### `AwsKeyId`<sup>Required</sup> <a name="AwsKeyId" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId"></a>

```go
func AwsKeyId() *string
```

- *Type:* *string

---

##### `AwsSecretKey`<sup>Required</sup> <a name="AwsSecretKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey"></a>

```go
func AwsSecretKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableList <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputDirectoryTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputDirectoryTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroList <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatAvroList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatAvroList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvList <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatCsvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatCsvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">ValidateUtf8</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidateUtf8`<sup>Required</sup> <a name="ValidateUtf8" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```go
func ValidateUtf8() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonList <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatList <a name="StageExternalS3CompatibleDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcList <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatOrcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatOrcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageExternalS3CompatibleDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageExternalS3CompatibleDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json"></a>

```go
func Json() StageExternalS3CompatibleDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageExternalS3CompatibleDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageExternalS3CompatibleDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageExternalS3CompatibleDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetList <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatParquetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatParquetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlList <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatXmlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatXmlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a>

---


### StageExternalS3CompatibleDescribeOutputList <a name="StageExternalS3CompatibleDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputLocationList <a name="StageExternalS3CompatibleDescribeOutputLocationList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleDescribeOutputLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleDescribeOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleDescribeOutputLocationOutputReference <a name="StageExternalS3CompatibleDescribeOutputLocationOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url">Url</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url"></a>

```go
func Url() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutputLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a>

---


### StageExternalS3CompatibleDescribeOutputOutputReference <a name="StageExternalS3CompatibleDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable">DirectoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryTable`<sup>Required</sup> <a name="DirectoryTable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable"></a>

```go
func DirectoryTable() StageExternalS3CompatibleDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat"></a>

```go
func FileFormat() StageExternalS3CompatibleDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location"></a>

```go
func Location() StageExternalS3CompatibleDescribeOutputLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a>

---


### StageExternalS3CompatibleDirectoryOutputReference <a name="StageExternalS3CompatibleDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate">ResetRefreshOnCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh"></a>

```go
func ResetAutoRefresh()
```

##### `ResetRefreshOnCreate` <a name="ResetRefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate"></a>

```go
func ResetRefreshOnCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput">RefreshOnCreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate">RefreshOnCreate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshOnCreateInput`<sup>Optional</sup> <a name="RefreshOnCreateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput"></a>

```go
func RefreshOnCreateInput() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `RefreshOnCreate`<sup>Required</sup> <a name="RefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate"></a>

```go
func RefreshOnCreate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---


### StageExternalS3CompatibleFileFormatAvroOutputReference <a name="StageExternalS3CompatibleFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---


### StageExternalS3CompatibleFileFormatCsvOutputReference <a name="StageExternalS3CompatibleFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull">ResetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">ResetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape">ResetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField">ResetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">ResetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader">ResetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines">ResetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader">ResetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```go
func ResetEmptyFieldAsNull()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```go
func ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape"></a>

```go
func ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```go
func ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```go
func ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetParseHeader` <a name="ResetParseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader"></a>

```go
func ResetParseHeader()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```go
func ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader"></a>

```go
func ResetSkipHeader()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput">EscapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput">ParseHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```go
func EmptyFieldAsNullInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```go
func ErrorOnColumnCountMismatchInput() *string
```

- *Type:* *string

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput"></a>

```go
func EscapeInput() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```go
func EscapeUnenclosedFieldInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```go
func FieldOptionallyEnclosedByInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeaderInput`<sup>Optional</sup> <a name="ParseHeaderInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```go
func ParseHeaderInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```go
func SkipBlankLinesInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```go
func SkipHeaderInput() *f64
```

- *Type:* *f64

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() *string
```

- *Type:* *string

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---


### StageExternalS3CompatibleFileFormatJsonOutputReference <a name="StageExternalS3CompatibleFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate">ResetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal">ResetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues">ResetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray">ResetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```go
func ResetAllowDuplicate()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal"></a>

```go
func ResetEnableOctal()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues"></a>

```go
func ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray"></a>

```go
func ResetStripOuterArray()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput">EnableOctalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```go
func AllowDuplicateInput() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput"></a>

```go
func EnableOctalInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```go
func StripNullValuesInput() *string
```

- *Type:* *string

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```go
func StripOuterArrayInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() *string
```

- *Type:* *string

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---


### StageExternalS3CompatibleFileFormatOrcOutputReference <a name="StageExternalS3CompatibleFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---


### StageExternalS3CompatibleFileFormatOutputReference <a name="StageExternalS3CompatibleFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc">PutOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet">PutParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml">PutXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName">ResetFormatName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc">ResetOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml">ResetXml</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro"></a>

```go
func PutAvro(value StageExternalS3CompatibleFileFormatAvro)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv"></a>

```go
func PutCsv(value StageExternalS3CompatibleFileFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson"></a>

```go
func PutJson(value StageExternalS3CompatibleFileFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---

##### `PutOrc` <a name="PutOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc"></a>

```go
func PutOrc(value StageExternalS3CompatibleFileFormatOrc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---

##### `PutParquet` <a name="PutParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet"></a>

```go
func PutParquet(value StageExternalS3CompatibleFileFormatParquet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---

##### `PutXml` <a name="PutXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml"></a>

```go
func PutXml(value StageExternalS3CompatibleFileFormatXml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro"></a>

```go
func ResetAvro()
```

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetFormatName` <a name="ResetFormatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName"></a>

```go
func ResetFormatName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetOrc` <a name="ResetOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc"></a>

```go
func ResetOrc()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```

##### `ResetXml` <a name="ResetXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml"></a>

```go
func ResetXml()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput">FormatNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput">OrcInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput">XmlInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageExternalS3CompatibleFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageExternalS3CompatibleFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json"></a>

```go
func Json() StageExternalS3CompatibleFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageExternalS3CompatibleFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageExternalS3CompatibleFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageExternalS3CompatibleFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput"></a>

```go
func AvroInput() StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---

##### `FormatNameInput`<sup>Optional</sup> <a name="FormatNameInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput"></a>

```go
func FormatNameInput() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---

##### `OrcInput`<sup>Optional</sup> <a name="OrcInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput"></a>

```go
func OrcInput() StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---

##### `XmlInput`<sup>Optional</sup> <a name="XmlInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput"></a>

```go
func XmlInput() StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---


### StageExternalS3CompatibleFileFormatParquetOutputReference <a name="StageExternalS3CompatibleFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText">ResetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType">ResetUseLogicalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner">ResetUseVectorizedScanner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryAsText` <a name="ResetBinaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText"></a>

```go
func ResetBinaryAsText()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

##### `ResetUseLogicalType` <a name="ResetUseLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType"></a>

```go
func ResetUseLogicalType()
```

##### `ResetUseVectorizedScanner` <a name="ResetUseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```go
func ResetUseVectorizedScanner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput">BinaryAsTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput">UseLogicalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput">UseVectorizedScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsTextInput`<sup>Optional</sup> <a name="BinaryAsTextInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```go
func BinaryAsTextInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `UseLogicalTypeInput`<sup>Optional</sup> <a name="UseLogicalTypeInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```go
func UseLogicalTypeInput() *string
```

- *Type:* *string

---

##### `UseVectorizedScannerInput`<sup>Optional</sup> <a name="UseVectorizedScannerInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```go
func UseVectorizedScannerInput() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() *string
```

- *Type:* *string

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---


### StageExternalS3CompatibleFileFormatXmlOutputReference <a name="StageExternalS3CompatibleFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert">ResetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace">ResetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement">ResetStripOuterElement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDisableAutoConvert` <a name="ResetDisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```go
func ResetDisableAutoConvert()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetPreserveSpace` <a name="ResetPreserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace"></a>

```go
func ResetPreserveSpace()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripOuterElement` <a name="ResetStripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement"></a>

```go
func ResetStripOuterElement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput">DisableAutoConvertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput">PreserveSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput">StripOuterElementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DisableAutoConvertInput`<sup>Optional</sup> <a name="DisableAutoConvertInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```go
func DisableAutoConvertInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `PreserveSpaceInput`<sup>Optional</sup> <a name="PreserveSpaceInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```go
func PreserveSpaceInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripOuterElementInput`<sup>Optional</sup> <a name="StripOuterElementInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```go
func StripOuterElementInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---


### StageExternalS3CompatibleShowOutputList <a name="StageExternalS3CompatibleShowOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalS3CompatibleShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get"></a>

```go
func Get(index *f64) StageExternalS3CompatibleShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalS3CompatibleShowOutputOutputReference <a name="StageExternalS3CompatibleShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalS3CompatibleShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled">DirectoryEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials">HasCredentials</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey">HasEncryptionKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DirectoryEnabled`<sup>Required</sup> <a name="DirectoryEnabled" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled"></a>

```go
func DirectoryEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HasCredentials`<sup>Required</sup> <a name="HasCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials"></a>

```go
func HasCredentials() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HasEncryptionKey`<sup>Required</sup> <a name="HasEncryptionKey" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey"></a>

```go
func HasEncryptionKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalS3CompatibleShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a>

---


### StageExternalS3CompatibleTimeoutsOutputReference <a name="StageExternalS3CompatibleTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternals3compatible"

stageexternals3compatible.NewStageExternalS3CompatibleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalS3CompatibleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



