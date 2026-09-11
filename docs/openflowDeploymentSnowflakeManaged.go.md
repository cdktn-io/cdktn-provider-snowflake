# `openflowDeploymentSnowflakeManaged` Submodule <a name="`openflowDeploymentSnowflakeManaged` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentSnowflakeManaged <a name="OpenflowDeploymentSnowflakeManaged" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed snowflake_openflow_deployment_snowflake_managed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManaged(scope Construct, id *string, config OpenflowDeploymentSnowflakeManagedConfig) OpenflowDeploymentSnowflakeManaged
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts"></a>

```go
func PutTimeouts(value OpenflowDeploymentSnowflakeManagedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable"></a>

```go
func ResetEventTable()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManaged_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManaged_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManaged_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManaged_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpenflowDeploymentSnowflakeManaged to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpenflowDeploymentSnowflakeManaged that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentSnowflakeManaged to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput">EventTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable">EventTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput"></a>

```go
func DescribeOutput() OpenflowDeploymentSnowflakeManagedDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters"></a>

```go
func Parameters() OpenflowDeploymentSnowflakeManagedParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput"></a>

```go
func ShowOutput() OpenflowDeploymentSnowflakeManagedShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts"></a>

```go
func Timeouts() OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput"></a>

```go
func EventTableInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable"></a>

```go
func EventTable() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentSnowflakeManagedConfig <a name="OpenflowDeploymentSnowflakeManagedConfig" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Comment: *string,
	DisplayName: *string,
	EventTable: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable">EventTable</a></code> | <code>*string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable"></a>

```go
EventTable *string
```

- *Type:* *string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts"></a>

```go
Timeouts OpenflowDeploymentSnowflakeManagedTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

### OpenflowDeploymentSnowflakeManagedDescribeOutput <a name="OpenflowDeploymentSnowflakeManagedDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedDescribeOutput {

}
```


### OpenflowDeploymentSnowflakeManagedParameters <a name="OpenflowDeploymentSnowflakeManagedParameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedParameters {

}
```


### OpenflowDeploymentSnowflakeManagedParametersEventTable <a name="OpenflowDeploymentSnowflakeManagedParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedParametersEventTable {

}
```


### OpenflowDeploymentSnowflakeManagedShowOutput <a name="OpenflowDeploymentSnowflakeManagedShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedShowOutput {

}
```


### OpenflowDeploymentSnowflakeManagedTimeouts <a name="OpenflowDeploymentSnowflakeManagedTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

&openflowdeploymentsnowflakemanaged.OpenflowDeploymentSnowflakeManagedTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentSnowflakeManagedDescribeOutputList <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentSnowflakeManagedDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentSnowflakeManagedDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a>

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableList <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedParametersEventTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentSnowflakeManagedParametersEventTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentSnowflakeManagedParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a>

---


### OpenflowDeploymentSnowflakeManagedParametersList <a name="OpenflowDeploymentSnowflakeManagedParametersList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentSnowflakeManagedParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentSnowflakeManagedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentSnowflakeManagedParametersOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentSnowflakeManagedParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable"></a>

```go
func EventTable() OpenflowDeploymentSnowflakeManagedParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentSnowflakeManagedParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a>

---


### OpenflowDeploymentSnowflakeManagedShowOutputList <a name="OpenflowDeploymentSnowflakeManagedShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentSnowflakeManagedShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentSnowflakeManagedShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentSnowflakeManagedShowOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentSnowflakeManagedShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentSnowflakeManagedShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a>

---


### OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference <a name="OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentsnowflakemanaged"

openflowdeploymentsnowflakemanaged.NewOpenflowDeploymentSnowflakeManagedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



