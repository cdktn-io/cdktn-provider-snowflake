# `stageExternalGcs` Submodule <a name="`stageExternalGcs` Submodule" id="@cdktn/provider-snowflake.stageExternalGcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalGcs <a name="StageExternalGcs" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs snowflake_stage_external_gcs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcs(scope Construct, id *string, config StageExternalGcsConfig) StageExternalGcs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig">StageExternalGcsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig">StageExternalGcsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory">PutDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat">PutFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDirectory` <a name="PutDirectory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory"></a>

```go
func PutDirectory(value StageExternalGcsDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption"></a>

```go
func PutEncryption(value StageExternalGcsEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

---

##### `PutFileFormat` <a name="PutFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat"></a>

```go
func PutFileFormat(value StageExternalGcsFileFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts"></a>

```go
func PutTimeouts(value StageExternalGcsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StageExternalGcs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.StageExternalGcs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.StageExternalGcs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.StageExternalGcs_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.StageExternalGcs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StageExternalGcs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StageExternalGcs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StageExternalGcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalGcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList">StageExternalGcsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference">StageExternalGcsDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference">StageExternalGcsEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference">StageExternalGcsFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList">StageExternalGcsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.stageType">StageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference">StageExternalGcsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directoryInput">DirectoryInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormatInput">FileFormatInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegrationInput">StorageIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.describeOutput"></a>

```go
func DescribeOutput() StageExternalGcsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList">StageExternalGcsDescribeOutputList</a>

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directory"></a>

```go
func Directory() StageExternalGcsDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference">StageExternalGcsDirectoryOutputReference</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryption"></a>

```go
func Encryption() StageExternalGcsEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference">StageExternalGcsEncryptionOutputReference</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormat"></a>

```go
func FileFormat() StageExternalGcsFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference">StageExternalGcsFileFormatOutputReference</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.showOutput"></a>

```go
func ShowOutput() StageExternalGcsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList">StageExternalGcsShowOutputList</a>

---

##### `StageType`<sup>Required</sup> <a name="StageType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.stageType"></a>

```go
func StageType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeouts"></a>

```go
func Timeouts() StageExternalGcsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference">StageExternalGcsTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directoryInput"></a>

```go
func DirectoryInput() StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryptionInput"></a>

```go
func EncryptionInput() StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormatInput"></a>

```go
func FileFormatInput() StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `StorageIntegrationInput`<sup>Optional</sup> <a name="StorageIntegrationInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegrationInput"></a>

```go
func StorageIntegrationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalGcsConfig <a name="StageExternalGcsConfig" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Name: *string,
	Schema: *string,
	StorageIntegration: *string,
	Url: *string,
	Comment: *string,
	Directory: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsDirectory,
	Encryption: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsEncryption,
	FileFormat: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormat,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.url">Url</a></code> | <code>*string</code> | Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#id StageExternalGcs#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#database StageExternalGcs#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#name StageExternalGcs#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#schema StageExternalGcs#schema}

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.storageIntegration"></a>

```go
StorageIntegration *string
```

- *Type:* *string

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

GCS stages require a storage integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#storage_integration StageExternalGcs#storage_integration}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#url StageExternalGcs#url}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#comment StageExternalGcs#comment}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.directory"></a>

```go
Directory StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#directory StageExternalGcs#directory}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.encryption"></a>

```go
Encryption StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#encryption StageExternalGcs#encryption}

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.fileFormat"></a>

```go
FileFormat StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#file_format StageExternalGcs#file_format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#id StageExternalGcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.timeouts"></a>

```go
Timeouts StageExternalGcsTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#timeouts StageExternalGcs#timeouts}

---

### StageExternalGcsDescribeOutput <a name="StageExternalGcsDescribeOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutput {

}
```


### StageExternalGcsDescribeOutputDirectoryTable <a name="StageExternalGcsDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputDirectoryTable {

}
```


### StageExternalGcsDescribeOutputFileFormat <a name="StageExternalGcsDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormat {

}
```


### StageExternalGcsDescribeOutputFileFormatAvro <a name="StageExternalGcsDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatAvro {

}
```


### StageExternalGcsDescribeOutputFileFormatCsv <a name="StageExternalGcsDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatCsv {

}
```


### StageExternalGcsDescribeOutputFileFormatJson <a name="StageExternalGcsDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatJson {

}
```


### StageExternalGcsDescribeOutputFileFormatOrc <a name="StageExternalGcsDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatOrc {

}
```


### StageExternalGcsDescribeOutputFileFormatParquet <a name="StageExternalGcsDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatParquet {

}
```


### StageExternalGcsDescribeOutputFileFormatXml <a name="StageExternalGcsDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDescribeOutputFileFormatXml {

}
```


### StageExternalGcsDirectory <a name="StageExternalGcsDirectory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsDirectory {
	Enable: interface{},
	AutoRefresh: *string,
	NotificationIntegration: *string,
	RefreshOnCreate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.enable">Enable</a></code> | <code>interface{}</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.notificationIntegration">NotificationIntegration</a></code> | <code>*string</code> | Specifies the name of the notification integration used to automatically refresh the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.refreshOnCreate">RefreshOnCreate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#enable StageExternalGcs#enable}

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#auto_refresh StageExternalGcs#auto_refresh}

---

##### `NotificationIntegration`<sup>Optional</sup> <a name="NotificationIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.notificationIntegration"></a>

```go
NotificationIntegration *string
```

- *Type:* *string

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#notification_integration StageExternalGcs#notification_integration}

---

##### `RefreshOnCreate`<sup>Optional</sup> <a name="RefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.refreshOnCreate"></a>

```go
RefreshOnCreate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#refresh_on_create StageExternalGcs#refresh_on_create}

---

### StageExternalGcsEncryption <a name="StageExternalGcsEncryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsEncryption {
	GcsSseKms: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms,
	None: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsEncryptionNone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.gcsSseKms">GcsSseKms</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | gcs_sse_kms block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.none">None</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | none block. |

---

##### `GcsSseKms`<sup>Optional</sup> <a name="GcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.gcsSseKms"></a>

```go
GcsSseKms StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

gcs_sse_kms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#gcs_sse_kms StageExternalGcs#gcs_sse_kms}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.none"></a>

```go
None StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#none StageExternalGcs#none}

---

### StageExternalGcsEncryptionGcsSseKms <a name="StageExternalGcsEncryptionGcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsEncryptionGcsSseKms {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Specifies the KMS-managed key ID. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Specifies the KMS-managed key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#kms_key_id StageExternalGcs#kms_key_id}

---

### StageExternalGcsEncryptionNone <a name="StageExternalGcsEncryptionNone" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsEncryptionNone {

}
```


### StageExternalGcsFileFormat <a name="StageExternalGcsFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormat {
	Avro: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatAvro,
	Csv: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatCsv,
	FormatName: *string,
	Json: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatJson,
	Orc: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatOrc,
	Parquet: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatParquet,
	Xml: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageExternalGcs.StageExternalGcsFileFormatXml,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.formatName">FormatName</a></code> | <code>*string</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | xml block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.avro"></a>

```go
Avro StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#avro StageExternalGcs#avro}

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.csv"></a>

```go
Csv StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#csv StageExternalGcs#csv}

---

##### `FormatName`<sup>Optional</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.formatName"></a>

```go
FormatName *string
```

- *Type:* *string

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#format_name StageExternalGcs#format_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.json"></a>

```go
Json StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#json StageExternalGcs#json}

---

##### `Orc`<sup>Optional</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.orc"></a>

```go
Orc StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#orc StageExternalGcs#orc}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.parquet"></a>

```go
Parquet StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#parquet StageExternalGcs#parquet}

---

##### `Xml`<sup>Optional</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.xml"></a>

```go
Xml StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#xml StageExternalGcs#xml}

---

### StageExternalGcsFileFormatAvro <a name="StageExternalGcsFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatAvro {
	Compression: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatCsv <a name="StageExternalGcsFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatCsv {
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.encoding">Encoding</a></code> | <code>*string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escape">Escape</a></code> | <code>*string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.emptyFieldAsNull"></a>

```go
EmptyFieldAsNull *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#empty_field_as_null StageExternalGcs#empty_field_as_null}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#encoding StageExternalGcs#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```go
ErrorOnColumnCountMismatch *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#error_on_column_count_mismatch StageExternalGcs#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escape"></a>

```go
Escape *string
```

- *Type:* *string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#escape StageExternalGcs#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escapeUnenclosedField"></a>

```go
EscapeUnenclosedField *string
```

- *Type:* *string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#escape_unenclosed_field StageExternalGcs#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#field_delimiter StageExternalGcs#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```go
FieldOptionallyEnclosedBy *string
```

- *Type:* *string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#field_optionally_enclosed_by StageExternalGcs#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `ParseHeader`<sup>Optional</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.parseHeader"></a>

```go
ParseHeader *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#parse_header StageExternalGcs#parse_header}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#record_delimiter StageExternalGcs#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipBlankLines"></a>

```go
SkipBlankLines *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#skip_blank_lines StageExternalGcs#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipHeader"></a>

```go
SkipHeader *f64
```

- *Type:* *f64

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#skip_header StageExternalGcs#skip_header}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatJson <a name="StageExternalGcsFileFormatJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatJson {
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.allowDuplicate"></a>

```go
AllowDuplicate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#allow_duplicate StageExternalGcs#allow_duplicate}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.enableOctal"></a>

```go
EnableOctal *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#enable_octal StageExternalGcs#enable_octal}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripNullValues"></a>

```go
StripNullValues *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#strip_null_values StageExternalGcs#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripOuterArray"></a>

```go
StripOuterArray *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#strip_outer_array StageExternalGcs#strip_outer_array}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatOrc <a name="StageExternalGcsFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatOrc {
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatParquet <a name="StageExternalGcsFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatParquet {
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `BinaryAsText`<sup>Optional</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.binaryAsText"></a>

```go
BinaryAsText *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#binary_as_text StageExternalGcs#binary_as_text}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `UseLogicalType`<sup>Optional</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useLogicalType"></a>

```go
UseLogicalType *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#use_logical_type StageExternalGcs#use_logical_type}

---

##### `UseVectorizedScanner`<sup>Optional</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useVectorizedScanner"></a>

```go
UseVectorizedScanner *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#use_vectorized_scanner StageExternalGcs#use_vectorized_scanner}

---

### StageExternalGcsFileFormatXml <a name="StageExternalGcsFileFormatXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsFileFormatXml {
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `DisableAutoConvert`<sup>Optional</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.disableAutoConvert"></a>

```go
DisableAutoConvert *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#disable_auto_convert StageExternalGcs#disable_auto_convert}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

##### `PreserveSpace`<sup>Optional</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.preserveSpace"></a>

```go
PreserveSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#preserve_space StageExternalGcs#preserve_space}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `StripOuterElement`<sup>Optional</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.stripOuterElement"></a>

```go
StripOuterElement *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#strip_outer_element StageExternalGcs#strip_outer_element}

---

### StageExternalGcsShowOutput <a name="StageExternalGcsShowOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsShowOutput {

}
```


### StageExternalGcsTimeouts <a name="StageExternalGcsTimeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

&stageexternalgcs.StageExternalGcsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#create StageExternalGcs#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#read StageExternalGcs#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#update StageExternalGcs#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#create StageExternalGcs#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#read StageExternalGcs#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_gcs#update StageExternalGcs#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalGcsDescribeOutputDirectoryTableList <a name="StageExternalGcsDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputDirectoryTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputDirectoryTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputDirectoryTableOutputReference <a name="StageExternalGcsDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputDirectoryTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputDirectoryTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn">LastRefreshedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable">StageExternalGcsDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastRefreshedOn`<sup>Required</sup> <a name="LastRefreshedOn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn"></a>

```go
func LastRefreshedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable">StageExternalGcsDescribeOutputDirectoryTable</a>

---


### StageExternalGcsDescribeOutputFileFormatAvroList <a name="StageExternalGcsDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatAvroList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatAvroList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatAvroOutputReference <a name="StageExternalGcsDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro">StageExternalGcsDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro">StageExternalGcsDescribeOutputFileFormatAvro</a>

---


### StageExternalGcsDescribeOutputFileFormatCsvList <a name="StageExternalGcsDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatCsvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatCsvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatCsvOutputReference <a name="StageExternalGcsDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">ValidateUtf8</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv">StageExternalGcsDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidateUtf8`<sup>Required</sup> <a name="ValidateUtf8" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```go
func ValidateUtf8() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv">StageExternalGcsDescribeOutputFileFormatCsv</a>

---


### StageExternalGcsDescribeOutputFileFormatJsonList <a name="StageExternalGcsDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatJsonOutputReference <a name="StageExternalGcsDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson">StageExternalGcsDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson">StageExternalGcsDescribeOutputFileFormatJson</a>

---


### StageExternalGcsDescribeOutputFileFormatList <a name="StageExternalGcsDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatOrcList <a name="StageExternalGcsDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatOrcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatOrcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatOrcOutputReference <a name="StageExternalGcsDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc">StageExternalGcsDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc">StageExternalGcsDescribeOutputFileFormatOrc</a>

---


### StageExternalGcsDescribeOutputFileFormatOutputReference <a name="StageExternalGcsDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList">StageExternalGcsDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList">StageExternalGcsDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList">StageExternalGcsDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList">StageExternalGcsDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList">StageExternalGcsDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList">StageExternalGcsDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat">StageExternalGcsDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageExternalGcsDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList">StageExternalGcsDescribeOutputFileFormatAvroList</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageExternalGcsDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList">StageExternalGcsDescribeOutputFileFormatCsvList</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.json"></a>

```go
func Json() StageExternalGcsDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList">StageExternalGcsDescribeOutputFileFormatJsonList</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageExternalGcsDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList">StageExternalGcsDescribeOutputFileFormatOrcList</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageExternalGcsDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList">StageExternalGcsDescribeOutputFileFormatParquetList</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageExternalGcsDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList">StageExternalGcsDescribeOutputFileFormatXmlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat">StageExternalGcsDescribeOutputFileFormat</a>

---


### StageExternalGcsDescribeOutputFileFormatParquetList <a name="StageExternalGcsDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatParquetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatParquetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatParquetOutputReference <a name="StageExternalGcsDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet">StageExternalGcsDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet">StageExternalGcsDescribeOutputFileFormatParquet</a>

---


### StageExternalGcsDescribeOutputFileFormatXmlList <a name="StageExternalGcsDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatXmlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputFileFormatXmlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputFileFormatXmlOutputReference <a name="StageExternalGcsDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml">StageExternalGcsDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml">StageExternalGcsDescribeOutputFileFormatXml</a>

---


### StageExternalGcsDescribeOutputList <a name="StageExternalGcsDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get"></a>

```go
func Get(index *f64) StageExternalGcsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsDescribeOutputOutputReference <a name="StageExternalGcsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.directoryTable">DirectoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList">StageExternalGcsDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList">StageExternalGcsDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput">StageExternalGcsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryTable`<sup>Required</sup> <a name="DirectoryTable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.directoryTable"></a>

```go
func DirectoryTable() StageExternalGcsDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList">StageExternalGcsDescribeOutputDirectoryTableList</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fileFormat"></a>

```go
func FileFormat() StageExternalGcsDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList">StageExternalGcsDescribeOutputFileFormatList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput">StageExternalGcsDescribeOutput</a>

---


### StageExternalGcsDirectoryOutputReference <a name="StageExternalGcsDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetNotificationIntegration">ResetNotificationIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetRefreshOnCreate">ResetRefreshOnCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetAutoRefresh"></a>

```go
func ResetAutoRefresh()
```

##### `ResetNotificationIntegration` <a name="ResetNotificationIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetNotificationIntegration"></a>

```go
func ResetNotificationIntegration()
```

##### `ResetRefreshOnCreate` <a name="ResetRefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetRefreshOnCreate"></a>

```go
func ResetRefreshOnCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegrationInput">NotificationIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreateInput">RefreshOnCreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegration">NotificationIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreate">RefreshOnCreate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationIntegrationInput`<sup>Optional</sup> <a name="NotificationIntegrationInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegrationInput"></a>

```go
func NotificationIntegrationInput() *string
```

- *Type:* *string

---

##### `RefreshOnCreateInput`<sup>Optional</sup> <a name="RefreshOnCreateInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreateInput"></a>

```go
func RefreshOnCreateInput() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `NotificationIntegration`<sup>Required</sup> <a name="NotificationIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegration"></a>

```go
func NotificationIntegration() *string
```

- *Type:* *string

---

##### `RefreshOnCreate`<sup>Required</sup> <a name="RefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreate"></a>

```go
func RefreshOnCreate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

---


### StageExternalGcsEncryptionGcsSseKmsOutputReference <a name="StageExternalGcsEncryptionGcsSseKmsOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsEncryptionGcsSseKmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsEncryptionGcsSseKmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

---


### StageExternalGcsEncryptionNoneOutputReference <a name="StageExternalGcsEncryptionNoneOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsEncryptionNoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsEncryptionNoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

---


### StageExternalGcsEncryptionOutputReference <a name="StageExternalGcsEncryptionOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms">PutGcsSseKms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putNone">PutNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetGcsSseKms">ResetGcsSseKms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsSseKms` <a name="PutGcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms"></a>

```go
func PutGcsSseKms(value StageExternalGcsEncryptionGcsSseKms)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

---

##### `PutNone` <a name="PutNone" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putNone"></a>

```go
func PutNone(value StageExternalGcsEncryptionNone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putNone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

---

##### `ResetGcsSseKms` <a name="ResetGcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetGcsSseKms"></a>

```go
func ResetGcsSseKms()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetNone"></a>

```go
func ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKms">GcsSseKms</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference">StageExternalGcsEncryptionGcsSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.none">None</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference">StageExternalGcsEncryptionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKmsInput">GcsSseKmsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.noneInput">NoneInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsSseKms`<sup>Required</sup> <a name="GcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKms"></a>

```go
func GcsSseKms() StageExternalGcsEncryptionGcsSseKmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference">StageExternalGcsEncryptionGcsSseKmsOutputReference</a>

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.none"></a>

```go
func None() StageExternalGcsEncryptionNoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference">StageExternalGcsEncryptionNoneOutputReference</a>

---

##### `GcsSseKmsInput`<sup>Optional</sup> <a name="GcsSseKmsInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKmsInput"></a>

```go
func GcsSseKmsInput() StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.noneInput"></a>

```go
func NoneInput() StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

---


### StageExternalGcsFileFormatAvroOutputReference <a name="StageExternalGcsFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

---


### StageExternalGcsFileFormatCsvOutputReference <a name="StageExternalGcsFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEmptyFieldAsNull">ResetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">ResetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscape">ResetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscapeUnenclosedField">ResetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">ResetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetParseHeader">ResetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipBlankLines">ResetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipHeader">ResetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```go
func ResetEmptyFieldAsNull()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```go
func ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscape"></a>

```go
func ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```go
func ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```go
func ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetParseHeader` <a name="ResetParseHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetParseHeader"></a>

```go
func ResetParseHeader()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```go
func ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipHeader"></a>

```go
func ResetSkipHeader()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeInput">EscapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeaderInput">ParseHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```go
func EmptyFieldAsNullInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```go
func ErrorOnColumnCountMismatchInput() *string
```

- *Type:* *string

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeInput"></a>

```go
func EscapeInput() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```go
func EscapeUnenclosedFieldInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```go
func FieldOptionallyEnclosedByInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeaderInput`<sup>Optional</sup> <a name="ParseHeaderInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```go
func ParseHeaderInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```go
func SkipBlankLinesInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```go
func SkipHeaderInput() *f64
```

- *Type:* *f64

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() *string
```

- *Type:* *string

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

---


### StageExternalGcsFileFormatJsonOutputReference <a name="StageExternalGcsFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetAllowDuplicate">ResetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetEnableOctal">ResetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripNullValues">ResetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripOuterArray">ResetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```go
func ResetAllowDuplicate()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetEnableOctal"></a>

```go
func ResetEnableOctal()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripNullValues"></a>

```go
func ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripOuterArray"></a>

```go
func ResetStripOuterArray()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctalInput">EnableOctalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```go
func AllowDuplicateInput() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctalInput"></a>

```go
func EnableOctalInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```go
func StripNullValuesInput() *string
```

- *Type:* *string

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```go
func StripOuterArrayInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() *string
```

- *Type:* *string

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

---


### StageExternalGcsFileFormatOrcOutputReference <a name="StageExternalGcsFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

---


### StageExternalGcsFileFormatOutputReference <a name="StageExternalGcsFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc">PutOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet">PutParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml">PutXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetFormatName">ResetFormatName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetOrc">ResetOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetXml">ResetXml</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro"></a>

```go
func PutAvro(value StageExternalGcsFileFormatAvro)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

---

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv"></a>

```go
func PutCsv(value StageExternalGcsFileFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson"></a>

```go
func PutJson(value StageExternalGcsFileFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

---

##### `PutOrc` <a name="PutOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc"></a>

```go
func PutOrc(value StageExternalGcsFileFormatOrc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

---

##### `PutParquet` <a name="PutParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet"></a>

```go
func PutParquet(value StageExternalGcsFileFormatParquet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

---

##### `PutXml` <a name="PutXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml"></a>

```go
func PutXml(value StageExternalGcsFileFormatXml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetAvro"></a>

```go
func ResetAvro()
```

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetFormatName` <a name="ResetFormatName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetFormatName"></a>

```go
func ResetFormatName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetOrc` <a name="ResetOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetOrc"></a>

```go
func ResetOrc()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```

##### `ResetXml` <a name="ResetXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetXml"></a>

```go
func ResetXml()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference">StageExternalGcsFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference">StageExternalGcsFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference">StageExternalGcsFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference">StageExternalGcsFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference">StageExternalGcsFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference">StageExternalGcsFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatNameInput">FormatNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orcInput">OrcInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xmlInput">XmlInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageExternalGcsFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference">StageExternalGcsFileFormatAvroOutputReference</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageExternalGcsFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference">StageExternalGcsFileFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.json"></a>

```go
func Json() StageExternalGcsFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference">StageExternalGcsFileFormatJsonOutputReference</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageExternalGcsFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference">StageExternalGcsFileFormatOrcOutputReference</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageExternalGcsFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference">StageExternalGcsFileFormatParquetOutputReference</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageExternalGcsFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference">StageExternalGcsFileFormatXmlOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avroInput"></a>

```go
func AvroInput() StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

---

##### `FormatNameInput`<sup>Optional</sup> <a name="FormatNameInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatNameInput"></a>

```go
func FormatNameInput() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

---

##### `OrcInput`<sup>Optional</sup> <a name="OrcInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orcInput"></a>

```go
func OrcInput() StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

---

##### `XmlInput`<sup>Optional</sup> <a name="XmlInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xmlInput"></a>

```go
func XmlInput() StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

---


### StageExternalGcsFileFormatParquetOutputReference <a name="StageExternalGcsFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetBinaryAsText">ResetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseLogicalType">ResetUseLogicalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseVectorizedScanner">ResetUseVectorizedScanner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryAsText` <a name="ResetBinaryAsText" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetBinaryAsText"></a>

```go
func ResetBinaryAsText()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

##### `ResetUseLogicalType` <a name="ResetUseLogicalType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseLogicalType"></a>

```go
func ResetUseLogicalType()
```

##### `ResetUseVectorizedScanner` <a name="ResetUseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```go
func ResetUseVectorizedScanner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsTextInput">BinaryAsTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalTypeInput">UseLogicalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScannerInput">UseVectorizedScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsTextInput`<sup>Optional</sup> <a name="BinaryAsTextInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```go
func BinaryAsTextInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `UseLogicalTypeInput`<sup>Optional</sup> <a name="UseLogicalTypeInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```go
func UseLogicalTypeInput() *string
```

- *Type:* *string

---

##### `UseVectorizedScannerInput`<sup>Optional</sup> <a name="UseVectorizedScannerInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```go
func UseVectorizedScannerInput() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() *string
```

- *Type:* *string

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

---


### StageExternalGcsFileFormatXmlOutputReference <a name="StageExternalGcsFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetDisableAutoConvert">ResetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetPreserveSpace">ResetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetStripOuterElement">ResetStripOuterElement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDisableAutoConvert` <a name="ResetDisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```go
func ResetDisableAutoConvert()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetPreserveSpace` <a name="ResetPreserveSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetPreserveSpace"></a>

```go
func ResetPreserveSpace()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripOuterElement` <a name="ResetStripOuterElement" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetStripOuterElement"></a>

```go
func ResetStripOuterElement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvertInput">DisableAutoConvertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpaceInput">PreserveSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElementInput">StripOuterElementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DisableAutoConvertInput`<sup>Optional</sup> <a name="DisableAutoConvertInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```go
func DisableAutoConvertInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `PreserveSpaceInput`<sup>Optional</sup> <a name="PreserveSpaceInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```go
func PreserveSpaceInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripOuterElementInput`<sup>Optional</sup> <a name="StripOuterElementInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```go
func StripOuterElementInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

---


### StageExternalGcsShowOutputList <a name="StageExternalGcsShowOutputList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageExternalGcsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get"></a>

```go
func Get(index *f64) StageExternalGcsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageExternalGcsShowOutputOutputReference <a name="StageExternalGcsShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageExternalGcsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.directoryEnabled">DirectoryEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasCredentials">HasCredentials</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasEncryptionKey">HasEncryptionKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput">StageExternalGcsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DirectoryEnabled`<sup>Required</sup> <a name="DirectoryEnabled" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.directoryEnabled"></a>

```go
func DirectoryEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HasCredentials`<sup>Required</sup> <a name="HasCredentials" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasCredentials"></a>

```go
func HasCredentials() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HasEncryptionKey`<sup>Required</sup> <a name="HasEncryptionKey" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasEncryptionKey"></a>

```go
func HasEncryptionKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageExternalGcsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput">StageExternalGcsShowOutput</a>

---


### StageExternalGcsTimeoutsOutputReference <a name="StageExternalGcsTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageexternalgcs"

stageexternalgcs.NewStageExternalGcsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageExternalGcsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



