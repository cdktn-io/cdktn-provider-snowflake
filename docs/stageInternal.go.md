# `stageInternal` Submodule <a name="`stageInternal` Submodule" id="@cdktn/provider-snowflake.stageInternal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageInternal <a name="StageInternal" id="@cdktn/provider-snowflake.stageInternal.StageInternal"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal snowflake_stage_internal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternal(scope Construct, id *string, config StageInternalConfig) StageInternal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig">StageInternalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.stageInternal.StageInternal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig">StageInternalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.putDirectory">PutDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.putFileFormat">PutFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.stageInternal.StageInternal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageInternal.StageInternal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.stageInternal.StageInternal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.stageInternal.StageInternal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.stageInternal.StageInternal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.stageInternal.StageInternal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageInternal.StageInternal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.stageInternal.StageInternal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.stageInternal.StageInternal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageInternal.StageInternal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageInternal.StageInternal.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageInternal.StageInternal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDirectory` <a name="PutDirectory" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putDirectory"></a>

```go
func PutDirectory(value StageInternalDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a>

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putEncryption"></a>

```go
func PutEncryption(value StageInternalEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a>

---

##### `PutFileFormat` <a name="PutFileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putFileFormat"></a>

```go
func PutFileFormat(value StageInternalFileFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putFileFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putTimeouts"></a>

```go
func PutTimeouts(value StageInternalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts">StageInternalTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.stageInternal.StageInternal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StageInternal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.StageInternal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.StageInternal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.StageInternal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageInternal.StageInternal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.StageInternal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StageInternal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StageInternal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StageInternal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageInternal.StageInternal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StageInternal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList">StageInternalDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference">StageInternalDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference">StageInternalEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference">StageInternalFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList">StageInternalShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.stageType">StageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference">StageInternalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.directoryInput">DirectoryInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.fileFormatInput">FileFormatInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.describeOutput"></a>

```go
func DescribeOutput() StageInternalDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList">StageInternalDescribeOutputList</a>

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.directory"></a>

```go
func Directory() StageInternalDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference">StageInternalDirectoryOutputReference</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.encryption"></a>

```go
func Encryption() StageInternalEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference">StageInternalEncryptionOutputReference</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.fileFormat"></a>

```go
func FileFormat() StageInternalFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference">StageInternalFileFormatOutputReference</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.showOutput"></a>

```go
func ShowOutput() StageInternalShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList">StageInternalShowOutputList</a>

---

##### `StageType`<sup>Required</sup> <a name="StageType" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.stageType"></a>

```go
func StageType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.timeouts"></a>

```go
func Timeouts() StageInternalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference">StageInternalTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.directoryInput"></a>

```go
func DirectoryInput() StageInternalDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.encryptionInput"></a>

```go
func EncryptionInput() StageInternalEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a>

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.fileFormatInput"></a>

```go
func FileFormatInput() StageInternalFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.stageInternal.StageInternal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StageInternalConfig <a name="StageInternalConfig" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalConfig {
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
	Comment: *string,
	Directory: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalDirectory,
	Encryption: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalEncryption,
	FileFormat: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormat,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.directory">Directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#id StageInternal#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts">StageInternalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#database StageInternal#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#name StageInternal#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#schema StageInternal#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#comment StageInternal#comment}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.directory"></a>

```go
Directory StageInternalDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#directory StageInternal#directory}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.encryption"></a>

```go
Encryption StageInternalEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#encryption StageInternal#encryption}

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.fileFormat"></a>

```go
FileFormat StageInternalFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#file_format StageInternal#file_format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#id StageInternal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.stageInternal.StageInternalConfig.property.timeouts"></a>

```go
Timeouts StageInternalTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts">StageInternalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#timeouts StageInternal#timeouts}

---

### StageInternalDescribeOutput <a name="StageInternalDescribeOutput" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutput {

}
```


### StageInternalDescribeOutputDirectoryTable <a name="StageInternalDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputDirectoryTable {

}
```


### StageInternalDescribeOutputFileFormat <a name="StageInternalDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormat {

}
```


### StageInternalDescribeOutputFileFormatAvro <a name="StageInternalDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatAvro {

}
```


### StageInternalDescribeOutputFileFormatCsv <a name="StageInternalDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatCsv {

}
```


### StageInternalDescribeOutputFileFormatJson <a name="StageInternalDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatJson {

}
```


### StageInternalDescribeOutputFileFormatOrc <a name="StageInternalDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatOrc {

}
```


### StageInternalDescribeOutputFileFormatParquet <a name="StageInternalDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatParquet {

}
```


### StageInternalDescribeOutputFileFormatXml <a name="StageInternalDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDescribeOutputFileFormatXml {

}
```


### StageInternalDirectory <a name="StageInternalDirectory" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalDirectory {
	Enable: interface{},
	AutoRefresh: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory.property.enable">Enable</a></code> | <code>interface{}</code> | Specifies whether to enable a directory table on the internal named stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the directory table metadata when new or updated data files are available on the internal named stage. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectory.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Specifies whether to enable a directory table on the internal named stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#enable StageInternal#enable}

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectory.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the directory table metadata when new or updated data files are available on the internal named stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#auto_refresh StageInternal#auto_refresh}

---

### StageInternalEncryption <a name="StageInternalEncryption" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalEncryption {
	SnowflakeFull: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalEncryptionSnowflakeFull,
	SnowflakeSse: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalEncryptionSnowflakeSse,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption.property.snowflakeFull">SnowflakeFull</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a></code> | snowflake_full block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption.property.snowflakeSse">SnowflakeSse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a></code> | snowflake_sse block. |

---

##### `SnowflakeFull`<sup>Optional</sup> <a name="SnowflakeFull" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryption.property.snowflakeFull"></a>

```go
SnowflakeFull StageInternalEncryptionSnowflakeFull
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a>

snowflake_full block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#snowflake_full StageInternal#snowflake_full}

---

##### `SnowflakeSse`<sup>Optional</sup> <a name="SnowflakeSse" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryption.property.snowflakeSse"></a>

```go
SnowflakeSse StageInternalEncryptionSnowflakeSse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a>

snowflake_sse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#snowflake_sse StageInternal#snowflake_sse}

---

### StageInternalEncryptionSnowflakeFull <a name="StageInternalEncryptionSnowflakeFull" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalEncryptionSnowflakeFull {

}
```


### StageInternalEncryptionSnowflakeSse <a name="StageInternalEncryptionSnowflakeSse" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalEncryptionSnowflakeSse {

}
```


### StageInternalFileFormat <a name="StageInternalFileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormat {
	Avro: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatAvro,
	Csv: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatCsv,
	FormatName: *string,
	Json: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatJson,
	Orc: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatOrc,
	Parquet: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatParquet,
	Xml: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.stageInternal.StageInternalFileFormatXml,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.formatName">FormatName</a></code> | <code>*string</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a></code> | xml block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.avro"></a>

```go
Avro StageInternalFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#avro StageInternal#avro}

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.csv"></a>

```go
Csv StageInternalFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#csv StageInternal#csv}

---

##### `FormatName`<sup>Optional</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.formatName"></a>

```go
FormatName *string
```

- *Type:* *string

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#format_name StageInternal#format_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.json"></a>

```go
Json StageInternalFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#json StageInternal#json}

---

##### `Orc`<sup>Optional</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.orc"></a>

```go
Orc StageInternalFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#orc StageInternal#orc}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.parquet"></a>

```go
Parquet StageInternalFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#parquet StageInternal#parquet}

---

##### `Xml`<sup>Optional</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat.property.xml"></a>

```go
Xml StageInternalFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#xml StageInternal#xml}

---

### StageInternalFileFormatAvro <a name="StageInternalFileFormatAvro" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatAvro {
	Compression: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#compression StageInternal#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#null_if StageInternal#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#trim_space StageInternal#trim_space}

---

### StageInternalFileFormatCsv <a name="StageInternalFileFormatCsv" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatCsv {
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
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.encoding">Encoding</a></code> | <code>*string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.escape">Escape</a></code> | <code>*string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#binary_format StageInternal#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#compression StageInternal#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#date_format StageInternal#date_format}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.emptyFieldAsNull"></a>

```go
EmptyFieldAsNull *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#empty_field_as_null StageInternal#empty_field_as_null}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#encoding StageInternal#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```go
ErrorOnColumnCountMismatch *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#error_on_column_count_mismatch StageInternal#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.escape"></a>

```go
Escape *string
```

- *Type:* *string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#escape StageInternal#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.escapeUnenclosedField"></a>

```go
EscapeUnenclosedField *string
```

- *Type:* *string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#escape_unenclosed_field StageInternal#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#field_delimiter StageInternal#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```go
FieldOptionallyEnclosedBy *string
```

- *Type:* *string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#field_optionally_enclosed_by StageInternal#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#file_extension StageInternal#file_extension}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#multi_line StageInternal#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#null_if StageInternal#null_if}

---

##### `ParseHeader`<sup>Optional</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.parseHeader"></a>

```go
ParseHeader *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#parse_header StageInternal#parse_header}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#record_delimiter StageInternal#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipBlankLines"></a>

```go
SkipBlankLines *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#skip_blank_lines StageInternal#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#skip_byte_order_mark StageInternal#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.skipHeader"></a>

```go
SkipHeader *f64
```

- *Type:* *f64

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#skip_header StageInternal#skip_header}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#time_format StageInternal#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#timestamp_format StageInternal#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#trim_space StageInternal#trim_space}

---

### StageInternalFileFormatJson <a name="StageInternalFileFormatJson" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatJson {
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
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.allowDuplicate"></a>

```go
AllowDuplicate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#allow_duplicate StageInternal#allow_duplicate}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#binary_format StageInternal#binary_format}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#compression StageInternal#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#date_format StageInternal#date_format}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.enableOctal"></a>

```go
EnableOctal *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#enable_octal StageInternal#enable_octal}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#file_extension StageInternal#file_extension}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#ignore_utf8_errors StageInternal#ignore_utf8_errors}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#multi_line StageInternal#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#null_if StageInternal#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#skip_byte_order_mark StageInternal#skip_byte_order_mark}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.stripNullValues"></a>

```go
StripNullValues *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#strip_null_values StageInternal#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.stripOuterArray"></a>

```go
StripOuterArray *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#strip_outer_array StageInternal#strip_outer_array}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#time_format StageInternal#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#timestamp_format StageInternal#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#trim_space StageInternal#trim_space}

---

### StageInternalFileFormatOrc <a name="StageInternalFileFormatOrc" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatOrc {
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#null_if StageInternal#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#trim_space StageInternal#trim_space}

---

### StageInternalFileFormatParquet <a name="StageInternalFileFormatParquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatParquet {
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
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `BinaryAsText`<sup>Optional</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.binaryAsText"></a>

```go
BinaryAsText *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#binary_as_text StageInternal#binary_as_text}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#compression StageInternal#compression}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#null_if StageInternal#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#trim_space StageInternal#trim_space}

---

##### `UseLogicalType`<sup>Optional</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.useLogicalType"></a>

```go
UseLogicalType *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#use_logical_type StageInternal#use_logical_type}

---

##### `UseVectorizedScanner`<sup>Optional</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet.property.useVectorizedScanner"></a>

```go
UseVectorizedScanner *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#use_vectorized_scanner StageInternal#use_vectorized_scanner}

---

### StageInternalFileFormatXml <a name="StageInternalFileFormatXml" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalFileFormatXml {
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
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#compression StageInternal#compression}

---

##### `DisableAutoConvert`<sup>Optional</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.disableAutoConvert"></a>

```go
DisableAutoConvert *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#disable_auto_convert StageInternal#disable_auto_convert}

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#ignore_utf8_errors StageInternal#ignore_utf8_errors}

---

##### `PreserveSpace`<sup>Optional</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.preserveSpace"></a>

```go
PreserveSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#preserve_space StageInternal#preserve_space}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#replace_invalid_characters StageInternal#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#skip_byte_order_mark StageInternal#skip_byte_order_mark}

---

##### `StripOuterElement`<sup>Optional</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml.property.stripOuterElement"></a>

```go
StripOuterElement *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#strip_outer_element StageInternal#strip_outer_element}

---

### StageInternalShowOutput <a name="StageInternalShowOutput" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalShowOutput {

}
```


### StageInternalTimeouts <a name="StageInternalTimeouts" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

&stageinternal.StageInternalTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#create StageInternal#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#delete StageInternal#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#read StageInternal#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#update StageInternal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#create StageInternal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#delete StageInternal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#read StageInternal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_internal#update StageInternal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageInternalDescribeOutputDirectoryTableList <a name="StageInternalDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputDirectoryTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputDirectoryTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputDirectoryTableOutputReference <a name="StageInternalDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputDirectoryTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputDirectoryTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTable">StageInternalDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTable">StageInternalDescribeOutputDirectoryTable</a>

---


### StageInternalDescribeOutputFileFormatAvroList <a name="StageInternalDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatAvroList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatAvroList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatAvroOutputReference <a name="StageInternalDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvro">StageInternalDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvro">StageInternalDescribeOutputFileFormatAvro</a>

---


### StageInternalDescribeOutputFileFormatCsvList <a name="StageInternalDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatCsvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatCsvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatCsvOutputReference <a name="StageInternalDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">ValidateUtf8</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsv">StageInternalDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidateUtf8`<sup>Required</sup> <a name="ValidateUtf8" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```go
func ValidateUtf8() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsv">StageInternalDescribeOutputFileFormatCsv</a>

---


### StageInternalDescribeOutputFileFormatJsonList <a name="StageInternalDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatJsonOutputReference <a name="StageInternalDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJson">StageInternalDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJson">StageInternalDescribeOutputFileFormatJson</a>

---


### StageInternalDescribeOutputFileFormatList <a name="StageInternalDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatOrcList <a name="StageInternalDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatOrcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatOrcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatOrcOutputReference <a name="StageInternalDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrc">StageInternalDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrc">StageInternalDescribeOutputFileFormatOrc</a>

---


### StageInternalDescribeOutputFileFormatOutputReference <a name="StageInternalDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList">StageInternalDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList">StageInternalDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList">StageInternalDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList">StageInternalDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList">StageInternalDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList">StageInternalDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormat">StageInternalDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageInternalDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatAvroList">StageInternalDescribeOutputFileFormatAvroList</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageInternalDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatCsvList">StageInternalDescribeOutputFileFormatCsvList</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.json"></a>

```go
func Json() StageInternalDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatJsonList">StageInternalDescribeOutputFileFormatJsonList</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageInternalDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOrcList">StageInternalDescribeOutputFileFormatOrcList</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageInternalDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList">StageInternalDescribeOutputFileFormatParquetList</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageInternalDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList">StageInternalDescribeOutputFileFormatXmlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormat">StageInternalDescribeOutputFileFormat</a>

---


### StageInternalDescribeOutputFileFormatParquetList <a name="StageInternalDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatParquetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatParquetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatParquetOutputReference <a name="StageInternalDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquet">StageInternalDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatParquet">StageInternalDescribeOutputFileFormatParquet</a>

---


### StageInternalDescribeOutputFileFormatXmlList <a name="StageInternalDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatXmlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputFileFormatXmlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputFileFormatXmlOutputReference <a name="StageInternalDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXml">StageInternalDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatXml">StageInternalDescribeOutputFileFormatXml</a>

---


### StageInternalDescribeOutputList <a name="StageInternalDescribeOutputList" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.get"></a>

```go
func Get(index *f64) StageInternalDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalDescribeOutputOutputReference <a name="StageInternalDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.directoryTable">DirectoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList">StageInternalDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.fileFormat">FileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList">StageInternalDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutput">StageInternalDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryTable`<sup>Required</sup> <a name="DirectoryTable" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.directoryTable"></a>

```go
func DirectoryTable() StageInternalDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputDirectoryTableList">StageInternalDescribeOutputDirectoryTableList</a>

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.fileFormat"></a>

```go
func FileFormat() StageInternalDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputFileFormatList">StageInternalDescribeOutputFileFormatList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDescribeOutput">StageInternalDescribeOutput</a>

---


### StageInternalDirectoryOutputReference <a name="StageInternalDirectoryOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.resetAutoRefresh"></a>

```go
func ResetAutoRefresh()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalDirectory">StageInternalDirectory</a>

---


### StageInternalEncryptionOutputReference <a name="StageInternalEncryptionOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeFull">PutSnowflakeFull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeSse">PutSnowflakeSse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resetSnowflakeFull">ResetSnowflakeFull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resetSnowflakeSse">ResetSnowflakeSse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSnowflakeFull` <a name="PutSnowflakeFull" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeFull"></a>

```go
func PutSnowflakeFull(value StageInternalEncryptionSnowflakeFull)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeFull.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a>

---

##### `PutSnowflakeSse` <a name="PutSnowflakeSse" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeSse"></a>

```go
func PutSnowflakeSse(value StageInternalEncryptionSnowflakeSse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.putSnowflakeSse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a>

---

##### `ResetSnowflakeFull` <a name="ResetSnowflakeFull" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resetSnowflakeFull"></a>

```go
func ResetSnowflakeFull()
```

##### `ResetSnowflakeSse` <a name="ResetSnowflakeSse" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.resetSnowflakeSse"></a>

```go
func ResetSnowflakeSse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeFull">SnowflakeFull</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference">StageInternalEncryptionSnowflakeFullOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeSse">SnowflakeSse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference">StageInternalEncryptionSnowflakeSseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeFullInput">SnowflakeFullInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeSseInput">SnowflakeSseInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnowflakeFull`<sup>Required</sup> <a name="SnowflakeFull" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeFull"></a>

```go
func SnowflakeFull() StageInternalEncryptionSnowflakeFullOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference">StageInternalEncryptionSnowflakeFullOutputReference</a>

---

##### `SnowflakeSse`<sup>Required</sup> <a name="SnowflakeSse" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeSse"></a>

```go
func SnowflakeSse() StageInternalEncryptionSnowflakeSseOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference">StageInternalEncryptionSnowflakeSseOutputReference</a>

---

##### `SnowflakeFullInput`<sup>Optional</sup> <a name="SnowflakeFullInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeFullInput"></a>

```go
func SnowflakeFullInput() StageInternalEncryptionSnowflakeFull
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a>

---

##### `SnowflakeSseInput`<sup>Optional</sup> <a name="SnowflakeSseInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.snowflakeSseInput"></a>

```go
func SnowflakeSseInput() StageInternalEncryptionSnowflakeSse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryption">StageInternalEncryption</a>

---


### StageInternalEncryptionSnowflakeFullOutputReference <a name="StageInternalEncryptionSnowflakeFullOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalEncryptionSnowflakeFullOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalEncryptionSnowflakeFullOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFullOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalEncryptionSnowflakeFull
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeFull">StageInternalEncryptionSnowflakeFull</a>

---


### StageInternalEncryptionSnowflakeSseOutputReference <a name="StageInternalEncryptionSnowflakeSseOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalEncryptionSnowflakeSseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalEncryptionSnowflakeSseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSseOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalEncryptionSnowflakeSse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalEncryptionSnowflakeSse">StageInternalEncryptionSnowflakeSse</a>

---


### StageInternalFileFormatAvroOutputReference <a name="StageInternalFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a>

---


### StageInternalFileFormatCsvOutputReference <a name="StageInternalFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEmptyFieldAsNull">ResetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">ResetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEscape">ResetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEscapeUnenclosedField">ResetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">ResetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetParseHeader">ResetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipBlankLines">ResetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipHeader">ResetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```go
func ResetEmptyFieldAsNull()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```go
func ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEscape"></a>

```go
func ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```go
func ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```go
func ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetParseHeader` <a name="ResetParseHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetParseHeader"></a>

```go
func ResetParseHeader()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```go
func ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetSkipHeader"></a>

```go
func ResetSkipHeader()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeInput">EscapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.parseHeaderInput">ParseHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```go
func EmptyFieldAsNullInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```go
func ErrorOnColumnCountMismatchInput() *string
```

- *Type:* *string

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeInput"></a>

```go
func EscapeInput() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```go
func EscapeUnenclosedFieldInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```go
func FieldOptionallyEnclosedByInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeaderInput`<sup>Optional</sup> <a name="ParseHeaderInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```go
func ParseHeaderInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```go
func SkipBlankLinesInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```go
func SkipHeaderInput() *f64
```

- *Type:* *f64

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() *string
```

- *Type:* *string

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.parseHeader"></a>

```go
func ParseHeader() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a>

---


### StageInternalFileFormatJsonOutputReference <a name="StageInternalFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetAllowDuplicate">ResetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetEnableOctal">ResetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetStripNullValues">ResetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetStripOuterArray">ResetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```go
func ResetAllowDuplicate()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetEnableOctal"></a>

```go
func ResetEnableOctal()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetStripNullValues"></a>

```go
func ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetStripOuterArray"></a>

```go
func ResetStripOuterArray()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.enableOctalInput">EnableOctalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```go
func AllowDuplicateInput() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.enableOctalInput"></a>

```go
func EnableOctalInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```go
func StripNullValuesInput() *string
```

- *Type:* *string

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```go
func StripOuterArrayInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.enableOctal"></a>

```go
func EnableOctal() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() *string
```

- *Type:* *string

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a>

---


### StageInternalFileFormatOrcOutputReference <a name="StageInternalFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatOrcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatOrcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a>

---


### StageInternalFileFormatOutputReference <a name="StageInternalFileFormatOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putOrc">PutOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putParquet">PutParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putXml">PutXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetFormatName">ResetFormatName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetOrc">ResetOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetXml">ResetXml</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putAvro"></a>

```go
func PutAvro(value StageInternalFileFormatAvro)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a>

---

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putCsv"></a>

```go
func PutCsv(value StageInternalFileFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putJson"></a>

```go
func PutJson(value StageInternalFileFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a>

---

##### `PutOrc` <a name="PutOrc" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putOrc"></a>

```go
func PutOrc(value StageInternalFileFormatOrc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putOrc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a>

---

##### `PutParquet` <a name="PutParquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putParquet"></a>

```go
func PutParquet(value StageInternalFileFormatParquet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putParquet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a>

---

##### `PutXml` <a name="PutXml" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putXml"></a>

```go
func PutXml(value StageInternalFileFormatXml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.putXml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetAvro"></a>

```go
func ResetAvro()
```

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetFormatName` <a name="ResetFormatName" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetFormatName"></a>

```go
func ResetFormatName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetOrc` <a name="ResetOrc" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetOrc"></a>

```go
func ResetOrc()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```

##### `ResetXml` <a name="ResetXml" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.resetXml"></a>

```go
func ResetXml()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference">StageInternalFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference">StageInternalFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference">StageInternalFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.orc">Orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference">StageInternalFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.parquet">Parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference">StageInternalFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.xml">Xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference">StageInternalFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.formatNameInput">FormatNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.orcInput">OrcInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.xmlInput">XmlInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.formatName">FormatName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.avro"></a>

```go
func Avro() StageInternalFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvroOutputReference">StageInternalFileFormatAvroOutputReference</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.csv"></a>

```go
func Csv() StageInternalFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsvOutputReference">StageInternalFileFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.json"></a>

```go
func Json() StageInternalFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJsonOutputReference">StageInternalFileFormatJsonOutputReference</a>

---

##### `Orc`<sup>Required</sup> <a name="Orc" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.orc"></a>

```go
func Orc() StageInternalFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrcOutputReference">StageInternalFileFormatOrcOutputReference</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.parquet"></a>

```go
func Parquet() StageInternalFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference">StageInternalFileFormatParquetOutputReference</a>

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.xml"></a>

```go
func Xml() StageInternalFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference">StageInternalFileFormatXmlOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.avroInput"></a>

```go
func AvroInput() StageInternalFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatAvro">StageInternalFileFormatAvro</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() StageInternalFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatCsv">StageInternalFileFormatCsv</a>

---

##### `FormatNameInput`<sup>Optional</sup> <a name="FormatNameInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.formatNameInput"></a>

```go
func FormatNameInput() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() StageInternalFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatJson">StageInternalFileFormatJson</a>

---

##### `OrcInput`<sup>Optional</sup> <a name="OrcInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.orcInput"></a>

```go
func OrcInput() StageInternalFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOrc">StageInternalFileFormatOrc</a>

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() StageInternalFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a>

---

##### `XmlInput`<sup>Optional</sup> <a name="XmlInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.xmlInput"></a>

```go
func XmlInput() StageInternalFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a>

---

##### `FormatName`<sup>Required</sup> <a name="FormatName" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.formatName"></a>

```go
func FormatName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormat">StageInternalFileFormat</a>

---


### StageInternalFileFormatParquetOutputReference <a name="StageInternalFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatParquetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatParquetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetBinaryAsText">ResetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetUseLogicalType">ResetUseLogicalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetUseVectorizedScanner">ResetUseVectorizedScanner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryAsText` <a name="ResetBinaryAsText" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetBinaryAsText"></a>

```go
func ResetBinaryAsText()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

##### `ResetUseLogicalType` <a name="ResetUseLogicalType" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetUseLogicalType"></a>

```go
func ResetUseLogicalType()
```

##### `ResetUseVectorizedScanner` <a name="ResetUseVectorizedScanner" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```go
func ResetUseVectorizedScanner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.binaryAsTextInput">BinaryAsTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useLogicalTypeInput">UseLogicalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useVectorizedScannerInput">UseVectorizedScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.binaryAsText">BinaryAsText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useLogicalType">UseLogicalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useVectorizedScanner">UseVectorizedScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAsTextInput`<sup>Optional</sup> <a name="BinaryAsTextInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```go
func BinaryAsTextInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `UseLogicalTypeInput`<sup>Optional</sup> <a name="UseLogicalTypeInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```go
func UseLogicalTypeInput() *string
```

- *Type:* *string

---

##### `UseVectorizedScannerInput`<sup>Optional</sup> <a name="UseVectorizedScannerInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```go
func UseVectorizedScannerInput() *string
```

- *Type:* *string

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.binaryAsText"></a>

```go
func BinaryAsText() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

##### `UseLogicalType`<sup>Required</sup> <a name="UseLogicalType" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useLogicalType"></a>

```go
func UseLogicalType() *string
```

- *Type:* *string

---

##### `UseVectorizedScanner`<sup>Required</sup> <a name="UseVectorizedScanner" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```go
func UseVectorizedScanner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquetOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatParquet">StageInternalFileFormatParquet</a>

---


### StageInternalFileFormatXmlOutputReference <a name="StageInternalFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalFileFormatXmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalFileFormatXmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetDisableAutoConvert">ResetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetPreserveSpace">ResetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetStripOuterElement">ResetStripOuterElement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDisableAutoConvert` <a name="ResetDisableAutoConvert" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```go
func ResetDisableAutoConvert()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetPreserveSpace` <a name="ResetPreserveSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetPreserveSpace"></a>

```go
func ResetPreserveSpace()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripOuterElement` <a name="ResetStripOuterElement" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.resetStripOuterElement"></a>

```go
func ResetStripOuterElement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.disableAutoConvertInput">DisableAutoConvertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.preserveSpaceInput">PreserveSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.stripOuterElementInput">StripOuterElementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DisableAutoConvertInput`<sup>Optional</sup> <a name="DisableAutoConvertInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```go
func DisableAutoConvertInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `PreserveSpaceInput`<sup>Optional</sup> <a name="PreserveSpaceInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```go
func PreserveSpaceInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripOuterElementInput`<sup>Optional</sup> <a name="StripOuterElementInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```go
func StripOuterElementInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.preserveSpace"></a>

```go
func PreserveSpace() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.stripOuterElement"></a>

```go
func StripOuterElement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXmlOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalFileFormatXml">StageInternalFileFormatXml</a>

---


### StageInternalShowOutputList <a name="StageInternalShowOutputList" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StageInternalShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.get"></a>

```go
func Get(index *f64) StageInternalShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StageInternalShowOutputOutputReference <a name="StageInternalShowOutputOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StageInternalShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.directoryEnabled">DirectoryEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.hasCredentials">HasCredentials</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.hasEncryptionKey">HasEncryptionKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutput">StageInternalShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DirectoryEnabled`<sup>Required</sup> <a name="DirectoryEnabled" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.directoryEnabled"></a>

```go
func DirectoryEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HasCredentials`<sup>Required</sup> <a name="HasCredentials" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.hasCredentials"></a>

```go
func HasCredentials() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HasEncryptionKey`<sup>Required</sup> <a name="HasEncryptionKey" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.hasEncryptionKey"></a>

```go
func HasEncryptionKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StageInternalShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageInternal.StageInternalShowOutput">StageInternalShowOutput</a>

---


### StageInternalTimeoutsOutputReference <a name="StageInternalTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/stageinternal"

stageinternal.NewStageInternalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StageInternalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.stageInternal.StageInternalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



